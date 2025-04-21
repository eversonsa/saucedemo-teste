import { Before, After } from '@cucumber/cucumber';
import { CustomWorld } from './world';
import { setDefaultTimeout } from '@cucumber/cucumber';

// Coloca o timeout para 60 segundos, por exemplo
setDefaultTimeout(60 * 1000);

Before(async function (this: CustomWorld) {
  await this.init();
});

After(async function (this: CustomWorld) {
  await this.cleanup();
});