// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 100 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 30000
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
 // forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 0,
  /* Opt out of parallel tests on CI. */
  workers: 3,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    //baseURL_visual:'https://demo.applitools.com',
    //baseURL:'https://www.saucedemo.com',
  
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
   // baseURL:'https://www.saucedemo.com/'
  },

  /* Configure projects for major browsers */
  projects: [
   
    {
      name: 'Source_version_viewports',
     // use: { ...devices['Pixel 5'],...devices['Desktop Chrome'], ...devices['Desktop Firefox'],...devices['iPhone 12'] },
      testMatch:'tests/Visual_testing/visualtesting_multipleviewports.test.js'
    },
    {
      name: 'actual_version_v2_viewports',
      //use: { ...devices['Pixel 5'],...devices['Desktop Chrome'], ...devices['Desktop Firefox'],...devices['iPhone 12'] },
      testMatch:'tests/Visual_testing/visualtesting_multipleviewports2.test.js',
      //dependencies: ['Stable_version_viewports']
    },
    {
      name: 'Sanity',
      use:{...devices['Desktop Chrome'],...devices['Desktop Firefox']},
      testDir:'tests/Sanity_testing'
    },
    {
      name:'Accessibiilty',
      use:{...devices['Desktop Firefox']},
      testDir:'tests/Accessability_testing'
    },
    {
      name:'monkey_testing',
      use:{...devices['Desktop Chrome']},
      testDir:'tests/Resilience_testing'
    }
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
});

