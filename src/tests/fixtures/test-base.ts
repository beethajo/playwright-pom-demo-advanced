import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { InventoryPage } from '@pages/InventoryPage';
import { ProductDetailsPage } from '@pages/ProductDetailsPage';
import { CartPage } from '@pages/CartPage';
import { CheckoutPage } from '@pages/CheckoutPage';
import { users } from '@utils/testData';

type Pages = {
  login: LoginPage;
  inventory: InventoryPage;
  product: ProductDetailsPage;
  cart: CartPage;
  checkout: CheckoutPage;
};

type TestFixtures = {
  pages: Pages;
  loginAsStandard: () => Promise<void>;
};

export const test = base.extend<TestFixtures>({
  pages: async ({ page }, use) => {
    const pages: Pages = {
      login: new LoginPage(page),
      inventory: new InventoryPage(page),
      product: new ProductDetailsPage(page),
      cart: new CartPage(page),
      checkout: new CheckoutPage(page),
    };
    await use(pages);
  },

  loginAsStandard: async ({ pages }, use) => {
    await pages.login.open();
    await pages.login.login(users.valid.username, users.valid.password);
    await pages.inventory.assertLoaded();
    await use(async () => {});
  },
});

export const expectEx = expect;
