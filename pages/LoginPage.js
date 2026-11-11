
class LoginPage {

    constructor(page) {

        this.page = page;

        // Username locator
        this.username = page.locator('#user-name');

        // Password locator
        this.password = page.locator('#password');

        // Login button locator
        this.loginButton = page.locator('#login-button');

        // Products heading locator
        this.productsTitle = page.locator('.title');

        // Error message locator
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async openApplication() {

        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {

        await this.username.fill(username);

        await this.password.fill(password);

        await this.loginButton.click();
    }
}

module.exports = LoginPage;
