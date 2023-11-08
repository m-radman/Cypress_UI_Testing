import loginPage from "../pages/loginPage"

describe("Buy", () => {
  it("Log in and buy", () => {
    // cy.visit(Cypress.env("baseUrl"))

    // loginPage.elements.usernameField().type(Cypress.env("username"))
    // loginPage.elements.passwordField().type(Cypress.env("password"))
    // loginPage.elements.loginBtn().click()

    cy.loginUser(Cypress.env("username"), Cypress.env("password"))
  })
})