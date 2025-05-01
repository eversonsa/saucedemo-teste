import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, chromium, Page } from 'playwright';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ProductModel } from '../models/ProductModel';
import { UserModel } from '../models/userModel';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  product!: ProductModel;
  user!: UserModel;

  loginPage!: LoginPage;
  productPage!: ProductPage;
  cartPage!: CartPage;
  checkoutPage!: CheckoutPage;

  async init() {
    this.browser = await chromium.launch({ headless: true });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    // Inicializa as páginas
    this.loginPage = new LoginPage(this.page);
    this.productPage = new ProductPage(this.page);
    this.cartPage = new CartPage(this.page);
    this.checkoutPage = new CheckoutPage(this.page);
  }

  async cleanup(): Promise<void> {
    await this.page?.close();
    await this.context?.close();
    await this.browser?.close();
  }

}

setWorldConstructor(CustomWorld);
