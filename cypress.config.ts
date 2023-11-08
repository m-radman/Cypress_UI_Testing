import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    baseUrl: "https://www.saucedemo.com/",
    username: "standard_user",
    password: "secret_sauce",
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/tests/**/*.cy.js",
  },
});
