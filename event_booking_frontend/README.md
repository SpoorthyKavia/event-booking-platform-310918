# Frontend Dev/Test Instructions

## Run Frontend Tests

1. Install dependencies  
   ```
   npm install
   ```

2. Run tests with Jest (ensures CI-mode, suitable for GitHub Actions, disables interactive/run prompts):  
   ```
   CI=true npx jest --colors
   ```

- Coverage is optionally displayed with `CI=true npx jest --coverage`.
- Test configuration: See jest.config.js, babel.config.js, and src/setupTests.js for setup with React Testing Library and ESM.
