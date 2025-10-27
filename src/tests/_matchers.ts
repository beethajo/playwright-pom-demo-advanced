import { expect } from '@playwright/test';

expect.extend({
  async toHaveCountGreaterThan(locator, expected: number) {
    const count = await locator.count();
    const pass = count > expected;
    return {
      pass,
      message: () => `Expected locator count ${count} to be > ${expected}`,
    };
  },
});

export {};
