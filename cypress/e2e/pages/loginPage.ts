class LoginPage {
  elements = {
    usernameField: () => cy.get("#user-name"),
    passwordField: () => cy.get("#password"),
    loginBtn: () => cy.get("#login-button")
  }
}

export default new LoginPage()