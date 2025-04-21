import reporter from "cucumber-html-reporter";

reporter.generate({
  theme: "bootstrap",
  jsonFile: "reports/report.json",
  output: "reports/report.html",
  reportSuiteAsScenarios: true,
  launchReport: true,
});