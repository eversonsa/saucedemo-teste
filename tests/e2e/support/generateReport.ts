const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  jsonDir: 'reports',           // Caminho onde está o report.json gerado pelo cucumber
  reportPath: 'reports/html',   // Caminho onde o HTML será gerado
  metadata: {
    browser: {
      name: 'chromium',
      version: 'latest',
    },
    device: 'Local machine',
    platform: {
      name: 'Windows',
      version: '10',
    },
  },
  customData: {
    title: 'Informações do Projeto',
    data: [
      { label: 'Projeto', value: 'Saucedemo Testes Automatizados' },
      { label: 'Autor', value: 'Everson (Firefrank Zendure)' },
      { label: 'Data de Execução', value: new Date().toLocaleString('pt-BR') }
    ],
  },
  displayDuration: true,
  openReportInBrowser: true,
  pageTitle: "Relatório de Testes E2E",
  reportName: "Relatório Automatizado com Playwright + Cucumber + TS",
});