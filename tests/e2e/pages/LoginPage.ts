import { Page, Locator } from '@playwright/test';
import { UserModel } from '../models/userModel';

export class LoginPage {
  private emailInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  private message: Locator;

  constructor(private page: Page) {
    this.emailInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.message = page.locator('[data-test="error"]');
  }

  async loginAs(user: UserModel) {
    await this.emailInput.fill(user.email);
    await this.passwordInput.fill(user.password);
    await this.loginButton.click();
  }

  async getErrorMessage() {
    await this.message.waitFor({ state: 'visible' });
    return await this.message.innerText();
  }
}