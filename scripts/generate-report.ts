import reporter from 'multiple-cucumber-html-reporter';

reporter.generate({
  jsonDir: 'reports', // onde está seu report.json
  reportPath: 'reports/html',
  metadata: {
    browser: {
      name: 'chromium',
      version: '123',
    },
    device: 'Local test machine',
    platform: {
      name: 'windows',
      version: '10',
    },
  },
  customData: {
    title: 'Projeto de Testes',
    data: [
      { label: 'Projeto', value: 'Saucedemo' },
      { label: 'Executor', value: 'Everson' },
    ],
  },
});