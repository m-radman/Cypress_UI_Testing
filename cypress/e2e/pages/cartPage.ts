import { clickElement } from "../helpers/utils"

class CartPage {
  elements = {
    addedProductsList: () => cy.get(".inventory_item_name"),
    checkoutBtn: () => cy.get("#checkout"),
    continueShoppingBtn: () => cy.get("#continue-shopping"),
    removeProductBtns: () => cy.get(".btn_small")
  }

  removeProduct(index) {
    clickElement(this.elements.removeProductBtns().eq(index))
  }
}

export default new CartPage()