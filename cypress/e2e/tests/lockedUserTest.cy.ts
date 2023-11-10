//Test will work only lockedUser config

describe("Confirm locked user can't login", () => {
  it("Login with locked credentials", () => {
    cy.loginUser(Cypress.env("username"), Cypress.env("password"))
    cy.get("[data-test='error']").should("be.visible")
  })
})