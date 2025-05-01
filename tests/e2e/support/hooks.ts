import { After, Before, ITestCaseHookParameter, setDefaultTimeout } from '@cucumber/cucumber';
import fs from 'fs';
import path from 'path';
import { CustomWorld } from './world'; // certifique-se que esse caminho esteja correto

// Coloca o timeout para 60 segundos, por exemplo
setDefaultTimeout(60 * 1000);

Before(async function (this: CustomWorld) {
  await this.init();
});

After(async function (this: CustomWorld, scenario: ITestCaseHookParameter) {
  if (!this.page) return;

  const status = scenario.result?.status;
  const name = scenario.pickle.name.replace(/\s+/g, '_').toLowerCase();

  if (status === 'PASSED') {
    const dir = path.join('screenshots', 'passed');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const filePath = path.join(dir, `${name}.png`);
    await this.page.screenshot({ path: filePath, fullPage: true });
    console.log(`[✅] Screenshot de sucesso salvo em: ${filePath}`);
  }

  // Se quiser capturar também falhas:
  if (status === 'FAILED') {
    const dir = path.join('screenshots', 'failed');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const filePath = path.join(dir, `${name}.png`);
    await this.page.screenshot({ path: filePath, fullPage: true });
    console.log(`[❌] Screenshot de falha salvo em: ${filePath}`);
  }

  // Fecha o navegador se desejar
  await this.page.close();
});