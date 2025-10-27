import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  readonly title: Locator;
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.locator('.title');
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async open() {
    await this.page.click('.shopping_cart_link');
    await expect(this.title).toHaveText('Your Cart');
  }

  async assertItemInCart(name: string) {
    await expect(this.cartItems.filter({ hasText: name })).toHaveCount(1);
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}
