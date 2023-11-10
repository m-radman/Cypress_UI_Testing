import { clickElement } from "../helpers/utils"

class InventoryPage {
  elements = {
    productNameLinks: () => cy.get("#inventory_container a>div"),
    addToCartBtns: () => cy.get(".pricebar>button")
  }

  addProductToCart(index: number): void {
    clickElement(this.elements.addToCartBtns().eq(index))
  }
}

export default new InventoryPage()