import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductDetailsPage extends BasePage {
  readonly title: Locator;
  readonly addToCartButton: Locator;
  readonly backButton: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.locator('.inventory_details_name');
    this.addToCartButton = page.locator('button:has-text("Add to cart")');
    this.backButton = page.locator('#back-to-products');
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async backToProducts() {
    await this.backButton.click();
  }
}
