module.exports = {
  default: {
    require: ['dist/**/*.js'],
    format: ['html:reports/report.html'],
    paths: ['tests/e2e/features/**/*.feature'],
    publishQuiet: true,
  },
};