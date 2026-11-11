
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({

  // Location of our test cases
  testDir: './tests',

  // Maximum time allowed for one test
  timeout: 30000,

  // Maximum time allowed for an assertion
  expect: {
    timeout: 5000
  },

  // Run tests in parallel
  fullyParallel: true,

  // Do not allow test.only in CI
  forbidOnly: !!process.env.CI,

  // Retry failed tests twice in CI
  retries: process.env.CI ? 2 : 0,

  // Use one worker in CI for stability
  workers: process.env.CI ? 1 : undefined,

  // Generate HTML report
  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],

  // Common browser settings
  use: {

    // Browser
    baseURL: 'https://www.saucedemo.com',

    // Run browser without displaying it
    headless: true,

    // Take screenshot when test fails
    screenshot: 'only-on-failure',

    // Record trace on first retry
    trace: 'on-first-retry',

    // Record video when test fails
    video: 'retain-on-failure',

    // Timeout for individual actions
    actionTimeout: 10000

  },

  // Browser selection
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome']
      }
    }
  ]

});
