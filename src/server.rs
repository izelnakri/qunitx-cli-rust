use futures_util::{SinkExt, StreamExt};
use poem::{
    handler,
    listener::{Acceptor, Listener, TcpListener},
    middleware::AddData,
    web::{
        websocket::{Message, WebSocket},
        Data,
    },
    EndpointExt, IntoResponse, Request, Response, Route, Server,
};
use std::{
    path::{Path, PathBuf},
    sync::Arc,
};
use tokio::sync::{broadcast, mpsc::UnboundedSender, oneshot, Mutex, RwLock};

use crate::tap::{Counter, TestEndDetails, WsEvent};

// ── Shared state for one test group ─────────────────────────────────────────

pub struct GroupState {
    /// Pre-built HTML page served at GET /. Updated in-place during watch mode.
    pub html: RwLock<String>,
    /// Path to the esbuild bundle served at GET /tests.js.
    pub bundle_path: PathBuf,
    /// Project root — used to serve static assets (CSS, fonts, …).
    pub project_root: PathBuf,
    /// Fires once when the browser sends the "done" WebSocket event.
    pub done_tx: Mutex<Option<oneshot::Sender<()>>>,
    /// Channel for serialised TAP output lines (shared across all groups).
    pub tap_tx: UnboundedSender<String>,
    /// Shared test counter (shared across all groups).
    pub counter: Arc<Mutex<Counter>>,
    /// Print request/connection diagnostics to stderr.
    pub debug: bool,
    /// Broadcast channel for pushing control messages ("refresh", "abort") to all
    /// connected browser WebSocket clients. Used by watch mode.
    pub broadcast_tx: broadcast::Sender<String>,
}

// ── Bind / serve ─────────────────────────────────────────────────────────────

/// Bind to an OS-assigned port, return the acceptor and the port number.
pub async fn bind() -> Result<(poem::listener::TcpAcceptor, u16), String> {
    let acceptor = TcpListener::bind("127.0.0.1:0")
        .into_acceptor()
        .await
        .map_err(|e| format!("Failed to bind server: {e}"))?;

    let port = acceptor
        .local_addr()
        .into_iter()
        .find_map(|a| a.as_socket_addr().map(|s| s.port()))
        .ok_or("Could not determine bound port")?;

    Ok((acceptor, port))
}

/// Spawn the poem server in the background on the pre-bound acceptor.
/// Returns a sender whose `send(())` triggers graceful shutdown.
pub fn serve(acceptor: poem::listener::TcpAcceptor, state: Arc<GroupState>) -> oneshot::Sender<()> {
    let (shutdown_tx, shutdown_rx) = oneshot::channel::<()>();

    let app = Route::new()
        .at("/*path", serve_static)
        .at("/tests.js", serve_bundle)
        .at("/ws", ws_upgrade)
        .at("/", serve_html)
        .with(AddData::new(state));

    tokio::spawn(async move {
        let _ = Server::new_with_acceptor(acceptor)
            .run_with_graceful_shutdown(
                app,
                async move {
                    let _ = shutdown_rx.await;
                },
                None,
            )
            .await;
    });

    shutdown_tx
}

// ── Route handlers ───────────────────────────────────────────────────────────

#[handler]
async fn serve_html(req: &Request, state: Data<&Arc<GroupState>>) -> impl IntoResponse {
    if state.debug {
        eprintln!("# server: {} {}", req.method(), req.uri().path());
    }
    poem::web::Html(state.html.read().await.clone())
}

#[handler]
async fn ws_upgrade(
    ws: WebSocket,
    req: &Request,
    state: Data<&Arc<GroupState>>,
) -> impl IntoResponse {
    if state.debug {
        eprintln!("# server: WebSocket upgrade {}", req.uri().path());
    }
    let state = Arc::clone(&state);
    ws.on_upgrade(move |socket| handle_ws(socket, state))
}

#[handler]
async fn serve_bundle(state: Data<&Arc<GroupState>>) -> impl IntoResponse {
    serve_file(&state.bundle_path, "application/javascript; charset=utf-8").await
}

#[handler]
async fn serve_static(req: &Request, state: Data<&Arc<GroupState>>) -> impl IntoResponse {
    let url_path = req.uri().path().trim_start_matches('/');

    if url_path.is_empty() {
        if state.debug {
            eprintln!("# server: static fallback → serving HTML for /");
        }
        return poem::web::Html(state.html.read().await.clone()).into_response();
    }

    let file_path = normalize_path(&state.project_root.join(url_path));

    if state.debug {
        eprintln!("# server: static {}", file_path.display());
    }

    if !file_path.starts_with(&state.project_root) {
        return poem::Response::builder()
            .status(poem::http::StatusCode::FORBIDDEN)
            .finish();
    }

    serve_file(&file_path, mime_for(&file_path)).await
}

// ── WebSocket message handler ─────────────────────────────────────────────────

async fn handle_ws(socket: poem::web::websocket::WebSocketStream, state: Arc<GroupState>) {
    if state.debug {
        eprintln!("# server: WebSocket connection established");
    }

    let mut broadcast_rx = state.broadcast_tx.subscribe();
    let (mut sink, mut stream) = socket.split();

    loop {
        tokio::select! {
            item = stream.next() => {
                let text = match item {
                    Some(Ok(Message::Text(t))) => t,
                    Some(Ok(Message::Close(_))) | None => break,
                    _ => continue,
                };

                let event: WsEvent = match serde_json::from_str(&text) {
                    Ok(e) => e,
                    Err(e) => {
                        if state.debug {
                            eprintln!("# server: bad WS message: {e}");
                        }
                        continue;
                    }
                };

                if state.debug {
                    eprintln!("# server: WS event={}", event.event);
                }

                match event.event.as_str() {
                    "testEnd" => {
                        if event.abort == Some(true) {
                            continue;
                        }
                        if let Some(v) = event.details {
                            if state.debug {
                                eprintln!("# server: testEnd raw: {v}");
                            }
                            match serde_json::from_value::<TestEndDetails>(v) {
                                Ok(details) => {
                                    let mut counter = state.counter.lock().await;
                                    crate::tap::display_test_result(&mut counter, &state.tap_tx, &details);
                                }
                                Err(e) => {
                                    if state.debug {
                                        eprintln!("# server: testEnd parse error: {e}");
                                    }
                                    let mut counter = state.counter.lock().await;
                                    counter.test_count += 1;
                                    counter.fail_count += 1;
                                    let n = counter.test_count;
                                    state.tap_tx.send(format!("not ok {n} (test result parse error: {e})")).ok();
                                }
                            }
                        }
                    }
                    "done" => {
                        let mut slot = state.done_tx.lock().await;
                        if let Some(tx) = slot.take() {
                            let _ = tx.send(());
                        }
                        // Keep connection alive so the browser can receive "refresh"
                        // when a file changes. The browser's reload() will close it naturally.
                    }
                    _ => {}
                }
            }

            Ok(msg) = broadcast_rx.recv() => {
                if sink.send(Message::Text(msg)).await.is_err() {
                    break;
                }
            }
        }
    }
}

// ── File-serving helpers ──────────────────────────────────────────────────────

async fn serve_file(path: &Path, content_type: &str) -> Response {
    match tokio::fs::read(path).await {
        Ok(bytes) => poem::Response::builder()
            .header(poem::http::header::CONTENT_TYPE, content_type)
            .body(bytes),
        Err(_) => poem::Response::builder()
            .status(poem::http::StatusCode::NOT_FOUND)
            .finish(),
    }
}

fn mime_for(path: &Path) -> &'static str {
    match path.extension().and_then(|e| e.to_str()) {
        Some("html" | "htm") => "text/html; charset=utf-8",
        Some("js" | "mjs") => "application/javascript; charset=utf-8",
        Some("css") => "text/css; charset=utf-8",
        Some("json") => "application/json; charset=utf-8",
        Some("svg") => "image/svg+xml",
        Some("png") => "image/png",
        Some("jpg" | "jpeg") => "image/jpeg",
        Some("ico") => "image/x-icon",
        Some("woff") => "font/woff",
        Some("woff2") => "font/woff2",
        Some("ttf") => "font/ttf",
        Some("map") => "application/json",
        _ => "application/octet-stream",
    }
}

fn normalize_path(path: &Path) -> PathBuf {
    let mut out = PathBuf::new();
    for component in path.components() {
        match component {
            std::path::Component::ParentDir => {
                out.pop();
            }
            std::path::Component::CurDir => {}
            other => out.push(other),
        }
    }
    out
}
