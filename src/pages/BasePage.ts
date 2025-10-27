import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  constructor(readonly page: Page) {}

  async goto(path: string = '/') {
    await this.page.goto(path);
  }

  async waitForLoadState(state: 'load' | 'domcontentloaded' | 'networkidle' = 'load') {
    await this.page.waitForLoadState(state);
  }

  async assertUrlContains(fragment: string) {
    await expect(this.page).toHaveURL(new RegExp(fragment));
  }
}
