# Playwright + TypeScript + POM (Advanced)
- Fixtures with a custom `test` that wires page objects
- Tag-based suites (`@smoke`, `@regression`) + parallel projects
- More page objects: Inventory, Product Details, Cart, Checkout
- CI with GitHub Actions
- Path aliases (`@pages/*`, `@utils/*`)
- Optional Nx monorepo variant included as a separate ZIP

## Setup
```bash
npm i
npx playwright install
```

## Run
```bash
npm test                 # full
npm run test:ui          # UI mode
npm run test:smoke       # only tests tagged @smoke
npm run test:reg         # only tests tagged @regression
BASE_URL=https://example.com npm test  # override base url if needed
```

## CI
A GitHub Actions workflow is provided under `.github/workflows/playwright.yml`.
