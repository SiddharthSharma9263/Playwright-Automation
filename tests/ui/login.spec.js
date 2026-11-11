
const { test, expect } = require('@playwright/test');

const LoginPage = require('../../Pages/LoginPage');

const users = require('../../test-data/users.json');

test.describe('Login Test Scenarios', () => {

  let loginPage;

  test.beforeEach(async ({ page }) => {

    loginPage = new LoginPage(page);

    await loginPage.openApplication();

  });

  test('Verify successful login', async ({ page }) => {

    await loginPage.login(
      users.validUser.username,
      users.validUser.password
    );

    await expect(loginPage.productsTitle)
      .toHaveText('Products');

    await expect(page)
      .toHaveURL(/inventory.html/);

  });

  test('Verify login with invalid credentials', async () => {

    await loginPage.login(
      users.invalidUser.username,
      users.invalidUser.password
    );

    await expect(loginPage.errorMessage)
      .toBeVisible();

  });

  test('Verify login with empty credentials', async () => {

    await loginPage.login('', '');

    await expect(loginPage.errorMessage)
      .toContainText('Username is required');

  });

});
