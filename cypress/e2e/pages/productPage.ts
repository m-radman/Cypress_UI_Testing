import inventoryPage from "./inventoryPage"
import { clickElement } from "../helpers/utils"

class ProductPage {
  elements = {
    addToCartBtn: () => cy.get(".btn_primary"),
    backToProductsBtn: () => cy.get("#back-to-products")
  }

  addProductToCart(index: number) {
    clickElement(inventoryPage.elements.productNameLinks().eq(index))
    clickElement(this.elements.addToCartBtn())
    clickElement(this.elements.backToProductsBtn())
  }
}

export default new ProductPage()