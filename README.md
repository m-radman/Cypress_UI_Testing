# UI testing with Cypress and Typescript

Application under test: https://www.saucedemo.com/     

---
### Where to find code  

 - The implementation of the page objects you can see [here](https://github.com/m-radman/Cypress_UI_Testing/tree/main/cypress/e2e/pages)  
 - The implementation of the tests you can see [here](https://github.com/m-radman/Cypress_UI_Testing/tree/main/cypress/e2e/tests)  
 ---

 ### How to run tests

For running tests you need to take next steps:

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`
3. Run tests using these commands:
    - To open Cypress and run tests from the browser `npm run cy:o`
    - To run tests headless `npm run cy:r`
    - To run only happy flow test `npm run runHF`
    - To run only sorting tests `npm run runSortTests`  
---

***Important note:***   
- Before running [lockedUserTest](https://github.com/m-radman/Cypress_UI_Testing/blob/main/cypress/e2e/tests/lockedUserTest.cy.ts) you need to open Cypress with this command `npm run cy:lockedUser`, otherwise test will fail.