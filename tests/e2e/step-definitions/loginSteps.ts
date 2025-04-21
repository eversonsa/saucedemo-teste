import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { UserModel } from '../models/userModel';
import { CustomWorld } from '../support/world';

Given('que o usuário está logado com o usuário {string} e senha {string}', async function (this: CustomWorld, username: string, password: string) {
  const user = new UserModel({ name: 'Usuário Teste', email: username, password });
  await this.page.goto('https://www.saucedemo.com/');
  await this.loginPage.loginAs(user);
});

When('clica no botão de login', async function () {
  await this.loginPage.clickLogin();
});

Then('ele deve ver a página de dashboard', async function () {
  await expect(this.page).toHaveURL(/.*inventory/);
});

Then('deve ver a mensagem de erro {string}', async function (expectedError: string) {
  const errorText = await this.loginPage.getErrorMessage();
  expect(errorText).toEqual(expectedError);
});