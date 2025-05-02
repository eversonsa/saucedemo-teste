import { After } from '@cucumber/cucumber';
import { CustomWorld } from './world';
import fs from 'fs';
import path from 'path';

After(async function (this: CustomWorld, scenario) {
  const screenshotDir = scenario.result?.status === 'PASSED' ? 'passed' : 'failed';
  const fileName = `${scenario.pickle.name.replace(/\s+/g, '_')}_${Date.now()}.png`;
  const dirPath = path.resolve(`screenshots/${screenshotDir}`);
  const filePath = path.resolve(dirPath, fileName);

  if (this.page && !this.page.isClosed()) {
    fs.mkdirSync(dirPath, { recursive: true });

    const buffer = await this.page.screenshot();
    
    // ⚠️ Este é o ponto crucial: attach com 'base64'
    await this.attach(buffer.toString('base64'), 'image/png');

    // Salvando o arquivo para inspeção manual
    fs.writeFileSync(filePath, buffer);
    console.log(`✅ Screenshot de sucesso salvo em: ${filePath}`);

    // Atualize o caminho do arquivo para ser relativo ao diretório do relatório
    const relativePath = path.relative(path.resolve('reports'), filePath);
    console.log(`Caminho relativo da imagem: ${relativePath}`);
    // Agora você pode adicionar esse caminho relativo ao seu relatório
  }

  await this.cleanup();
});