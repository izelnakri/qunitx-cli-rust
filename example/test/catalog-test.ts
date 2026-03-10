import { module, test } from 'qunitx';
import { BookCatalog } from '../src/bookstore.ts';

module('BookCatalog', function () {
  test('adds and retrieves a book by id', function (assert) {
    const catalog = new BookCatalog();
    catalog.addBook({ id: '1', title: 'Dune', author: 'Frank Herbert', price: 14.99, genre: 'Sci-Fi' });

    const book = catalog.findBook('1');
    assert.equal(book?.title, 'Dune');
    assert.equal(book?.author, 'Frank Herbert');
  });

  test('returns undefined for a missing book', function (assert) {
    const catalog = new BookCatalog();
    assert.equal(catalog.findBook('nonexistent'), undefined);
  });

  test('finds all books by a given author', function (assert) {
    const catalog = new BookCatalog();
    catalog.addBook({ id: '1', title: 'Dune', author: 'Frank Herbert', price: 14.99, genre: 'Sci-Fi' });
    catalog.addBook({ id: '2', title: 'Dune Messiah', author: 'Frank Herbert', price: 12.99, genre: 'Sci-Fi' });
    catalog.addBook({ id: '3', title: '1984', author: 'George Orwell', price: 9.99, genre: 'Dystopia' });

    const results = catalog.findByAuthor('Frank Herbert');
    assert.equal(results.length, 2);
    assert.ok(results.every((b) => b.author === 'Frank Herbert'));
  });

  test('removes a book from the catalog', function (assert) {
    const catalog = new BookCatalog();
    catalog.addBook({ id: '1', title: 'Dune', author: 'Frank Herbert', price: 14.99, genre: 'Sci-Fi' });
    assert.equal(catalog.size, 1);

    const removed = catalog.removeBook('1');
    assert.ok(removed);
    assert.equal(catalog.size, 0);
    assert.equal(catalog.findBook('1'), undefined);
  });
});
