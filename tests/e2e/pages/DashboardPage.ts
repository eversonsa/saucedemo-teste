import { Page } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  async isVisible(): Promise<boolean> {
    return this.page.url().includes('inventory');
  }
}