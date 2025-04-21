import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

export type PageName = 'login' | 'product' | 'cart' | 'checkout';

export class PageFactory {
  static getPage(pageName: PageName, page: Page): any {
    switch (pageName) {
      case 'login':
        return new LoginPage(page);
      case 'product':
        return new ProductPage(page);
      case 'cart':
        return new CartPage(page);
      case 'checkout':
        return new CheckoutPage(page);
      default:
        throw new Error(`Página desconhecida: ${pageName}`);
    }
  }
}
