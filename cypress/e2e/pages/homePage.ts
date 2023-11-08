class HomePage {
  elements = {
    usernameField: () => cy.get("#user-name"),
    passwordField: () => cy.get("#password")
  }
}