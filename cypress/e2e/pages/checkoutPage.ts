import { CheckoutData } from "../helpers/utils"
import { enterText } from "../helpers/utils"
import { clickElement } from "../helpers/utils"

class CheckoutPage {
  elements = {
    firstNameField: () => cy.get("#first-name"),
    lastNameField: () => cy.get("#last-name"),
    zipCodeField: () => cy.get("#postal-code"),
    continueBtn: () => cy.get("#continue"),
    finishBtn: () => cy.get("#finish"),
    completeOrderMsg: () => cy.contains("Thank you for your order!")
  }

  completeForm(checkoutFormData: CheckoutData) {
    enterText(this.elements.firstNameField(), checkoutFormData.firstName)
    enterText(this.elements.lastNameField(), checkoutFormData.lastName)
    enterText(this.elements.zipCodeField(), checkoutFormData.zipCode)
  }

  confirmOrder() {
    clickElement(this.elements.continueBtn())
    cy.url().should("contain", "/checkout-step-two")
    clickElement(this.elements.finishBtn())
    this.elements.completeOrderMsg().should("be.visible")
  }
}

export default new CheckoutPage()