// pages/CheckoutPage.ts
import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  private page: Page;
  private firstNameInput: Locator;
  private lastNameInput: Locator;
  private zipCodeInput: Locator;
  private continueButton: Locator;
  private finishButton: Locator;
  private successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator('#first-name');
    this.lastNameInput = page.locator('#last-name');
    this.zipCodeInput = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');
    this.successMessage = page.locator('.complete-header');
  }

  async fillCheckoutForm(firstName: string, lastName: string, zipCode: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.zipCodeInput.fill(zipCode);
  }

  async continue() {
    await this.continueButton.click();
  }

  async finish() {
    await this.finishButton.click();
  }

  async getSuccessMessage(): Promise<string> {
    await this.successMessage.waitFor({ state: 'visible' });
    return await this.successMessage.textContent() || '';
  }
}
