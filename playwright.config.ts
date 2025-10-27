import { defineConfig, devices } from '@playwright/test';

const baseURL = process.env.BASE_URL || 'https://www.saucedemo.com';

export default defineConfig({
  testDir: 'src/tests',
  timeout: 30 * 1000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
  use: {
    baseURL,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: true,
  },
  projects: [
    // Browser matrix
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
    // Tag-based suites (run with npm run test:smoke or npm run test:reg)
    {
      name: 'smoke',
      grep: /@smoke/,
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'regression',
      grep: /@regression/,
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  // Example sharding when using multiple workers in CI
  // workers: process.env.CI ? 2 : undefined,
});
