import { Page, Locator } from '@playwright/test';

export class CartPage {
  private page: Page;
  private cartItem: (name: string) => Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItem = (name: string) => page.locator('.cart_item').filter({ hasText: name });
  }

  async isProductInCart(productName: string): Promise<boolean> {
    return await this.cartItem(productName).isVisible();
  }
}
