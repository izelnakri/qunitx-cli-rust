use serde::Deserialize;
use serde_json::Value;

// ── Counter ──────────────────────────────────────────────────────────────────

#[derive(Default)]
pub struct Counter {
    pub test_count: u32,
    pub pass_count: u32,
    pub fail_count: u32,
    pub skip_count: u32,
}

// ── WebSocket event types ─────────────────────────────────────────────────────

#[derive(Deserialize)]
pub struct WsEvent {
    pub event: String,
    pub details: Option<Value>,
    pub abort: Option<bool>,
}

#[derive(Deserialize)]
#[serde(default)]
pub struct TestEndDetails {
    #[serde(rename = "fullName")]
    pub full_name: Vec<String>,
    pub name: String,
    pub status: String,
    pub runtime: f64,
    pub assertions: Vec<AssertionDetail>,
    /// QUnit older versions use `errors` instead of `assertions`.
    pub errors: Vec<AssertionDetail>,
}

impl Default for TestEndDetails {
    fn default() -> Self {
        Self {
            full_name: vec![],
            name: String::new(),
            status: String::new(),
            runtime: 0.0,
            assertions: vec![],
            errors: vec![],
        }
    }
}

#[derive(Deserialize, Default)]
#[serde(default)]
pub struct AssertionDetail {
    pub passed: bool,
    pub actual: Option<Value>,
    pub expected: Option<Value>,
    pub message: Option<String>,
    pub stack: Option<String>,
    pub todo: Option<bool>,
}

// ── TAP output ───────────────────────────────────────────────────────────────

/// Format and send one test result line (+ failure details) to the TAP channel.
pub fn display_test_result(
    counter: &mut Counter,
    tap_tx: &tokio::sync::mpsc::UnboundedSender<String>,
    details: &TestEndDetails,
) {
    counter.test_count += 1;
    let n = counter.test_count;
    let name = if !details.full_name.is_empty() {
        details.full_name.join(" | ")
    } else {
        details.name.clone()
    };
    // QUnit older versions expose failures via `errors`, newer via `assertions`.
    let assertions: &[AssertionDetail] = if !details.assertions.is_empty() {
        &details.assertions
    } else {
        &details.errors
    };

    match details.status.as_str() {
        "skipped" => {
            counter.skip_count += 1;
            tap_tx.send(format!("ok {n} {name} # skip")).ok();
        }
        "todo" => {
            tap_tx.send(format!("not ok {n} {name} # todo")).ok();
        }
        "failed" => {
            counter.fail_count += 1;
            tap_tx
                .send(format!("not ok {n} {name} # ({:.0} ms)", details.runtime))
                .ok();

            for (i, assertion) in assertions.iter().enumerate() {
                if assertion.passed || assertion.todo == Some(true) {
                    continue;
                }
                let stack_location = assertion.stack.as_deref().and_then(extract_stack_location);

                let yaml = yaml_dump([
                    ("name", yaml_str(&format!("Assertion #{}", i + 1))),
                    ("actual", yaml_value(assertion.actual.as_ref())),
                    ("expected", yaml_value(assertion.expected.as_ref())),
                    (
                        "message",
                        assertion
                            .message
                            .as_deref()
                            .map(yaml_str)
                            .unwrap_or_else(|| "null".into()),
                    ),
                    (
                        "stack",
                        assertion
                            .stack
                            .as_deref()
                            .map(yaml_str)
                            .unwrap_or_else(|| "null".into()),
                    ),
                    (
                        "at",
                        stack_location
                            .map(|s| yaml_str(&s))
                            .unwrap_or_else(|| "null".into()),
                    ),
                ]);

                tap_tx.send("  ---".into()).ok();
                for line in yaml.lines() {
                    tap_tx.send(format!("    {line}")).ok();
                }
                tap_tx.send("  ...".into()).ok();
            }
        }
        _ => {
            // "passed"
            counter.pass_count += 1;
            tap_tx
                .send(format!("ok {n} {name} # ({:.0} ms)", details.runtime))
                .ok();
        }
    }
}

pub fn display_final_result(counter: &Counter, duration_ms: u128) {
    println!();
    println!("1..{}", counter.test_count);
    println!("# tests {}", counter.test_count);
    println!("# pass {}", counter.pass_count);
    println!("# skip {}", counter.skip_count);
    println!("# fail {}", counter.fail_count);
    println!("# duration {duration_ms}ms");
    println!();
}

// ── YAML helpers ─────────────────────────────────────────────────────────────

fn yaml_dump<'a>(fields: impl IntoIterator<Item = (&'a str, String)>) -> String {
    fields
        .into_iter()
        .map(|(k, v)| format!("{k}: {v}"))
        .collect::<Vec<_>>()
        .join("\n")
}

fn yaml_value(v: Option<&Value>) -> String {
    match v {
        None => "null".into(),
        Some(Value::Null) => "null".into(),
        Some(Value::Bool(b)) => b.to_string(),
        Some(Value::Number(n)) => n.to_string(),
        Some(Value::String(s)) => yaml_str(s),
        Some(other) => {
            // Objects/arrays: emit as JSON on a single line (readable enough for diffs).
            other.to_string()
        }
    }
}

fn yaml_str(s: &str) -> String {
    if s.is_empty() {
        return "''".into();
    }
    if s.contains('\n') {
        // Literal block scalar, strip final newlines.
        let body: String = s.lines().map(|l| format!("  {l}\n")).collect();
        return format!("|-\n{body}");
    }
    // Quote if the value could be misread as another YAML type, or contains
    // characters that need escaping.
    let needs_quote = matches!(s, "null" | "true" | "false" | "yes" | "no" | "on" | "off")
        || s.starts_with([
            ' ', '"', '\'', '{', '[', '|', '>', '!', '&', '*', '#', '?', ':', '-', ',', '%', '@',
            '`',
        ])
        || s.contains(": ")
        || s.contains(" #");

    if needs_quote {
        format!("'{}'", s.replace('\'', "''"))
    } else {
        s.into()
    }
}

fn extract_stack_location(stack: &str) -> Option<String> {
    // Match the first `(file://...)` or `(http://...)` occurrence, similar to
    // the JS regex /\(.+\)/g.
    for m in stack.split('(').skip(1) {
        if let Some(end) = m.find(')') {
            let inner = &m[..end];
            if !inner.is_empty() {
                return Some(inner.replace("file://", ""));
            }
        }
    }
    None
}
