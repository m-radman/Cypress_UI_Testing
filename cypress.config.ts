import { defineConfig } from "cypress";

import fs = require("fs-extra");
import path = require("path");

function getConfigurationByFile(file: any) {
  const pathToConfigFile = path.resolve("cypress/configs", `${file}.json`);

  return fs.readJson(pathToConfigFile);
}

export default defineConfig({
  env: {
    baseUrl: "https://www.saucedemo.com/",
    username: "standard_user",
    password: "secret_sauce",
  },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      const file = config.env.configFile || "standardUser";
      return getConfigurationByFile(file);
    },
    specPattern: "cypress/e2e/tests/**/*.cy.ts",
    chromeWebSecurity: false
  },
});
