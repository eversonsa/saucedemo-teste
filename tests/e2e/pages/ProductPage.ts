import { Page, Locator } from '@playwright/test';

export class ProductPage {
  private page: Page;
  private inventoryItem: (name: string) => Locator;
  private addToCartButton: (name: string) => Locator;
  private cartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryItem = (name: string) => page.locator('.inventory_item').filter({ hasText: name });
    this.addToCartButton = (name: string) => this.inventoryItem(name).locator('button');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addProductToCart(productName: string) {
    await this.addToCartButton(productName).click();
  }

  async openCart() {
    await this.cartIcon.click();
  }
}
