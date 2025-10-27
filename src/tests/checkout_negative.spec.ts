import { test } from '../tests/fixtures/test-base';

test.describe('Checkout', () => {
  test('[@regression] missing info shows an error', async ({ pages, loginAsStandard }) => {
    await loginAsStandard();
    await pages.cart.open(); // empty cart OK, we just check validation
    await pages.cart.checkout();
    await pages.checkout.fillInfo('', '', '');
    await pages.checkout.assertErrorContains('Error');
  });
});
