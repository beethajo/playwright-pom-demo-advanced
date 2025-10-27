import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  readonly title: Locator;
  readonly inventoryItems: Locator;
  readonly sortSelect: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.locator('.title');
    this.inventoryItems = page.locator('.inventory_item');
    this.sortSelect = page.locator('[data-test="product_sort_container"]');
  }

  async assertLoaded() {
    await expect(this.title).toHaveText('Products');
    await expect(this.inventoryItems.first()).toBeVisible();
  }

  async sortBy(value: 'az'|'za'|'lohi'|'hilo') {
    await this.sortSelect.selectOption(value);
  }

  async openItemByName(name: string) {
    await this.page.locator('.inventory_item_name', { hasText: name }).click();
  }
}
