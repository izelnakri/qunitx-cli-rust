import { module, test } from 'qunitx';
import { Inventory } from '../src/bookstore.ts';

module('Inventory', function () {
  test('tracks stock correctly after adding', function (assert) {
    const inventory = new Inventory();
    inventory.addStock('book-1', 5);
    inventory.addStock('book-1', 3);

    assert.equal(inventory.getStock('book-1'), 8);
  });

  test('isAvailable reflects stock levels', function (assert) {
    const inventory = new Inventory();

    assert.notOk(inventory.isAvailable('book-2'), 'unavailable when no stock');
    inventory.addStock('book-2', 1);
    assert.ok(inventory.isAvailable('book-2'), 'available when stock exists');
  });

  test('removeStock prevents going below zero', function (assert) {
    const inventory = new Inventory();
    inventory.addStock('book-3', 2);

    const success = inventory.removeStock('book-3', 5);
    assert.notOk(success, 'returns false when stock is insufficient');
    assert.equal(inventory.getStock('book-3'), 2, 'stock unchanged after failed removal');
  });
});
