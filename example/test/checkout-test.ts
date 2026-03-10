import { module, test } from 'qunitx';
import { BookCatalog, Inventory, Checkout } from '../src/bookstore.ts';

function setup() {
  const catalog = new BookCatalog();
  const inventory = new Inventory();
  const checkout = new Checkout(catalog, inventory);

  catalog.addBook({ id: 'b1', title: 'The Hobbit', author: 'J.R.R. Tolkien', price: 11.99, genre: 'Fantasy' });
  catalog.addBook({ id: 'b2', title: 'Foundation', author: 'Isaac Asimov', price: 13.49, genre: 'Sci-Fi' });
  inventory.addStock('b1', 10);
  inventory.addStock('b2', 3);

  return { catalog, inventory, checkout };
}

module('Checkout', function () {
  test('purchase succeeds when book is in stock', function (assert) {
    const { checkout, inventory } = setup();

    const result = checkout.purchase('b1', 2);
    assert.ok(result.success);
    assert.equal(result.total, 23.98);
    assert.equal(result.message, 'Purchase successful');
    assert.equal(inventory.getStock('b1'), 8, 'stock decremented after purchase');
  });

  test('purchase fails when book does not exist', function (assert) {
    const { checkout } = setup();

    const result = checkout.purchase('unknown-id');
    assert.notOk(result.success);
    assert.equal(result.message, 'Book not found');
  });

  test('calculateTotal sums prices for multiple items correctly', function (assert) {
    const { checkout } = setup();

    const total = checkout.calculateTotal([
      { bookId: 'b1', quantity: 2 },
      { bookId: 'b2', quantity: 1 },
    ]);

    // Intentional failing assertion: actual total is 11.99*2 + 13.49 = 37.47
    // but we assert 40.00 to demonstrate a failing test case
    assert.equal(total, 37.47, 'expected wrong total to show a failing test');
  });
});
