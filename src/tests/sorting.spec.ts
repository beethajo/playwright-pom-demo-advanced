import { test } from '../tests/fixtures/test-base';
import { expectEx as expect } from '../tests/fixtures/test-base';

test.describe('Sorting', () => {
  test('[@regression] sort items A->Z and Z->A', async ({ pages, loginAsStandard }) => {
    await loginAsStandard();
    await pages.inventory.sortBy('az');
    // simple heuristic: item names should be in alphabetical order
    const names = await pages['inventory'].page.locator('.inventory_item_name').allInnerTexts();
    const sorted = [...names].sort((a, b) => a.localeCompare(b));
    expect(names).toEqual(sorted);

    await pages.inventory.sortBy('za');
    const namesZA = await pages['inventory'].page.locator('.inventory_item_name').allInnerTexts();
    const sortedZA = [...namesZA].sort((a, b) => b.localeCompare(a));
    expect(namesZA).toEqual(sortedZA);
  });
});
