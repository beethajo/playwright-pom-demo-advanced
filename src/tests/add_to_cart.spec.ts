import { test } from '../tests/fixtures/test-base';
import { expectEx as expect } from '../tests/fixtures/test-base';

test.describe('Cart', () => {
  test.only('[@smoke] add item to cart and verify', async ({ pages, loginAsStandard }) => {
    await loginAsStandard();
    await pages.inventory.openItemByName('Sauce Labs Backpack');
    await pages.product.addToCart();
    await pages.cart.open();
    await pages.cart.assertItemInCart('Sauce Labs Backpack');
  });
});
