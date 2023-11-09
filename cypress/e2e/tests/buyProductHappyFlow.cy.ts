import inventoryPage from "../pages/inventoryPage"
import productPage from "../pages/productPage"
import navBar from "../pages/common/navBar"
import cartPage from "../pages/cartPage"

import { CheckoutData } from "../helpers/utils"
import checkoutPage from "../pages/checkoutPage"

describe("Buy", () => {
  let checkoutFormData: CheckoutData

  before(() => {
    cy.loginUser(Cypress.env("username"), Cypress.env("password"))

    cy.fixture("checkoutFormData").then((data) => {
      checkoutFormData = data
    })
  })

  it("Buy Products", () => {
    //add first prod
    inventoryPage.elements.productNameLinks().eq(0).click()
    productPage.elements.addToCartBtn().click()
    productPage.elements.backToProductsBtn().click()

    //add second prod
    inventoryPage.elements.addToCartBtns().eq(2).click()

    //go to cart
    navBar.elements.shoppingCartLink().click()
    cartPage.elements.removeProductBtns().eq(0) //remove item
    cartPage.elements.checkoutBtn().click()

    //fill checkout form
    checkoutPage.elements.firstNameField().type(checkoutFormData.firstName)
    checkoutPage.elements.lastNameField().type(checkoutFormData.lastName)
    checkoutPage.elements.zipCodeField().type(checkoutFormData.zipCode)

    //complete order
    checkoutPage.elements.continueBtn().click()
    checkoutPage.elements.finishBtn().click()

    //assert
    checkoutPage.elements.completeOrderMsg().should("be.visible")
  })
})