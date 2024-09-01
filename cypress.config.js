const { defineConfig } = require("cypress");
const  {configureAllureAdapterPlugins} = require ('@mmisty/cypress-allure-adapter/plugins');

module.exports = defineConfig({
  retries: 1,
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config);
      return config;
    },
  },
});
