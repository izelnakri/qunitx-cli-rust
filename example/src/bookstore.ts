export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  genre: string;
}

export class BookCatalog {
  private books: Map<string, Book> = new Map();

  addBook(book: Book): void {
    this.books.set(book.id, book);
  }

  findBook(id: string): Book | undefined {
    return this.books.get(id);
  }

  findByAuthor(author: string): Book[] {
    return [...this.books.values()].filter((b) => b.author === author);
  }

  findByGenre(genre: string): Book[] {
    return [...this.books.values()].filter((b) => b.genre === genre);
  }

  removeBook(id: string): boolean {
    return this.books.delete(id);
  }

  getAll(): Book[] {
    return [...this.books.values()];
  }

  get size(): number {
    return this.books.size;
  }
}

export class Inventory {
  private stock: Map<string, number> = new Map();

  addStock(bookId: string, quantity: number): void {
    const current = this.stock.get(bookId) ?? 0;
    this.stock.set(bookId, current + quantity);
  }

  removeStock(bookId: string, quantity: number): boolean {
    const current = this.stock.get(bookId) ?? 0;
    if (current < quantity) return false;
    this.stock.set(bookId, current - quantity);
    return true;
  }

  getStock(bookId: string): number {
    return this.stock.get(bookId) ?? 0;
  }

  isAvailable(bookId: string): boolean {
    return this.getStock(bookId) > 0;
  }
}

export class Checkout {
  private catalog: BookCatalog;
  private inventory: Inventory;

  constructor(catalog: BookCatalog, inventory: Inventory) {
    this.catalog = catalog;
    this.inventory = inventory;
  }

  purchase(
    bookId: string,
    quantity: number = 1
  ): { success: boolean; total: number; message: string } {
    const book = this.catalog.findBook(bookId);
    if (!book) {
      return { success: false, total: 0, message: 'Book not found' };
    }
    if (!this.inventory.removeStock(bookId, quantity)) {
      return { success: false, total: 0, message: 'Insufficient stock' };
    }
    return { success: true, total: book.price * quantity, message: 'Purchase successful' };
  }

  applyDiscount(price: number, discountPercent: number): number {
    return price * (1 - discountPercent / 100);
  }

  calculateTotal(items: Array<{ bookId: string; quantity: number }>): number {
    return items.reduce((total, item) => {
      const book = this.catalog.findBook(item.bookId);
      return total + (book ? book.price * item.quantity : 0);
    }, 0);
  }
}
