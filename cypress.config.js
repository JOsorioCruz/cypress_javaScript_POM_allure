const { defineConfig } = require("cypress");
//const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const  configureAllureAdapterPlugins = require ('@mmisty/cypress-allure-adapter/plugins');

module.exports = defineConfig({
  retries: 1,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config);
      return config;
    },
  },
});
