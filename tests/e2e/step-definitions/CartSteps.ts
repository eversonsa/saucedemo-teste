import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { UserModel } from '../models/userModel';
import { ProductModel } from '../models/ProductModel';
import { PageFactory } from '../factories/PageFactory';
import { CustomWorld } from '../support/world';


When('ele adiciona o produto {string} ao carrinho', async function (this: CustomWorld, productName: string) {
  const product = new ProductModel({ name: productName, price: '' });
  await this.productPage.addProductToCart(product.name);
  this.product = product;

  this.cartPage = PageFactory.getPage('cart', this.page);
});

When('acessa o carrinho', async function (this: CustomWorld) {
  await this.productPage.openCart();
});

Then('ele deve ver o produto {string} no carrinho', async function (this: CustomWorld, productName: string) {
  const isVisible = await this.cartPage.isProductInCart(productName);
  expect(isVisible).toBeTruthy();
});
