import { test, expect } from '@playwright/test';
import { WishInfinitePage } from '@pages/WishInfinitePage';

test.describe('WishInfinite Playground', () => {
  test('[@smoke] navigate to wishinfinite.com and click Selectors under Playground', async ({
    page,
  }) => {
    const wishInfinite = new WishInfinitePage(page);

    await wishInfinite.open();
    await wishInfinite.navigateToSelectors();
    await wishInfinite.assertOnSelectorsPage();
  });
});
