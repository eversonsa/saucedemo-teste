import { After } from '@cucumber/cucumber';
import { CustomWorld } from './world';
import fs from 'fs';
import path from 'path';

After(async function (this: CustomWorld, scenario) {
  if (this.page && !this.page.isClosed()) {
    const featureName = scenario.gherkinDocument?.feature?.name?.replace(/\s+/g, '_') || 'unknown_feature';
    const scenarioName = scenario.pickle.name.replace(/\s+/g, '_');
    const dir = path.resolve(`reports/screenshots/${featureName}`);
    const filePath = path.resolve(dir, `${scenarioName}.png`);

    fs.mkdirSync(dir, { recursive: true });
    const buffer = await this.page.screenshot({ path: filePath });
    await this.attach(buffer, 'image/png');
  }

  await this.cleanup();
});