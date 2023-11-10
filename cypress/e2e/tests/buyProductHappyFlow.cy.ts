import inventoryPage from "../pages/inventoryPage"
import productPage from "../pages/productPage"
import navBar from "../pages/common/navBar"
import cartPage from "../pages/cartPage"
import checkoutPage from "../pages/checkoutPage"

import { CheckoutData, Products, CartItems, clickElement } from "../helpers/utils"

describe("Buy", () => {
  let checkoutFormData: CheckoutData

  let product1: string
  let product3: string

  before(() => {
    cy.loginUser(Cypress.env("username"), Cypress.env("password"))

    inventoryPage.elements.productNameLinks().eq(Products.backpack).invoke("text").then((item) => {
      product1 = item
    })
    inventoryPage.elements.productNameLinks().eq(Products.bikeLight).invoke("text").then((item) => {
      product3 = item
    })

    cy.fixture("checkoutFormData").then((data) => {
      checkoutFormData = data
    })
  })

  it("Buy Products", () => {
    //add first prod
    inventoryPage.addProductToCart(Products.backpack)
    navBar.elements.shoppingCartBadge().should("contain", "1")

    //add second prod
    productPage.addProductToCart(Products.fleeceJacket)
    navBar.elements.shoppingCartBadge().should("contain", "2")

    //add third prod
    inventoryPage.addProductToCart(Products.bikeLight)
    navBar.elements.shoppingCartBadge().should("contain", "3")

    //remove second product
    inventoryPage.removeFromCart(Products.fleeceJacket)

    //go to cart
    clickElement(navBar.elements.shoppingCartLink())
    cartPage.elements.addedProductsList().eq(CartItems.first).should("have.text", product1)
    cartPage.elements.addedProductsList().eq(CartItems.second).should("have.text", product3)

    //remove product from cart
    cartPage.removeProduct(CartItems.first)
    navBar.elements.shoppingCartBadge().should("contain", "1")
    cartPage.elements.addedProductsList().eq(CartItems.first).should("have.text", product3)

    //go to checkout
    clickElement(cartPage.elements.checkoutBtn())
    checkoutPage.completeForm(checkoutFormData)

    //complete & assert successfull order
    checkoutPage.confirmOrder()
  })
})