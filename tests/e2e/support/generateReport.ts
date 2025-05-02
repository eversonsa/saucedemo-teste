const multipleReporter = require('multiple-cucumber-html-reporter');

multipleReporter.generate({
  jsonDir: 'reports',
  reportPath: 'reports/html',
  reportName: 'E2E Report',
  pageTitle: 'E2E Tests',
  displayDuration: true,
  openReportInBrowser: true,
  metadata: {
    browser: {
      name: 'chromium',
      version: 'latest',
    },
    device: 'Local test machine',
    platform: {
      name: 'Windows',
      version: '10',
    },
  },
  customData: {
    title: 'Informações do Projeto',
    data: [
      { label: 'Projeto', value: 'Saucedemo Testes Automatizados' },
      { label: 'Autor', value: 'Everson Souza de Araujo' },
      { label: 'Data de Execução', value: new Date().toLocaleString('pt-BR') }
    ],
  },
});