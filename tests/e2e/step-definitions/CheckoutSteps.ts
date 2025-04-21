import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CheckoutModel } from '../models/CheckoutModel';

When(
  'ele preenche os dados do checkout com nome {string}, sobrenome {string} e cep {string}',
  async function (firstName: string, lastName: string, zipCode: string) {
    this.checkoutData = new CheckoutModel({ firstName, lastName, zipCode });

    await this.cartPage.page.locator('#checkout').click();
    await this.checkoutPage.fillCheckoutForm(firstName, lastName, zipCode);
    await this.checkoutPage.continue();
  }
);

When('finaliza a compra', async function () {
  await this.checkoutPage.finish();
});

Then('deve ver a mensagem de sucesso {string}', async function (expectedMessage: string) {
  const actualMessage = await this.checkoutPage.getSuccessMessage();
  expect(actualMessage?.trim()).toBe(expectedMessage);
});
