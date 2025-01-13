const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default

 module.exports = defineConfig({
   e2e: {
   baseUrl:"https://demo.opencart.com/",
     specPattern: "cypress/e2e/features/**/*.feature",
     setupNodeEvents(on, config) {on("file:preprocessor",cucumber());
    },
   },
 });

 
