class CheckoutPage {
  elements = {
    firstNameField: () => cy.get("#first-name"),
    lastNameField: () => cy.get("#last-name"),
    zipCodeField: () => cy.get("#postal-code"),
    continueBtn: () => cy.get("#continue"),
    finishBtn: () => cy.get("#finish"),
    completeOrderMsg: () => cy.contains("Thank you for your order!")
  }
}

export default new CheckoutPage()