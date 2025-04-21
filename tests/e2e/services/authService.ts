import { Page } from '@playwright/test';

export class AuthService {
  static async login(page: Page, email: string, password: string): Promise<void> {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', email);
    await page.fill('#password', password);
    await page.click('#login-button');
  }
}