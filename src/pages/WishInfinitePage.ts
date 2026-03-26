import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class WishInfinitePage extends BasePage {
  readonly playgroundMenu: Locator;
  readonly selectorsLink: Locator;

  constructor(page: Page) {
    super(page);
    this.playgroundMenu = page.locator('nav').getByRole('link', { name: /playground/i, exact: false });
    this.selectorsLink = page.getByRole('link', { name: /selectors/i, exact: false });
  }

  async open() {
    await this.page.goto('https://wishinfinite.com/');
    await this.waitForLoadState('domcontentloaded');
  }

  async navigateToSelectors() {
    await this.playgroundMenu.click();
    await this.selectorsLink.click();
  }

  async assertOnSelectorsPage() {
    await expect(this.page).toHaveURL(/selectors/i);
  }
}
