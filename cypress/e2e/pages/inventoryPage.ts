import { SortOptions, clickElement, Products } from "../helpers/utils"

class InventoryPage {
  elements = {
    productNameLinks: () => cy.get("#inventory_container a>div"),
    addToCartBtns: () => cy.get(".pricebar>button"),
    sortMenu: () => cy.get("[data-test='product_sort_container']"),
    productPrices: () => cy.get(".inventory_item_price")
  }

  addProductToCart(product: Products) {
    clickElement(this.elements.addToCartBtns().eq(product))
  }

  removeFromCart(product: Products) {
    clickElement(this.elements.addToCartBtns().eq(product))
  }

  sortProducts(option: SortOptions) {
    this.elements.sortMenu().select(option)
  }

  assertNameSorting(firstProductName: string, lastProductName: string) {
    this.elements.productNameLinks().first().should("have.text", firstProductName)
    this.elements.productNameLinks().last().should("have.text", lastProductName)
  }

  assertPriceSorting(firstProductPrice: string, lastProductPrice: string) {
    this.elements.productPrices().first().should("contain.text", firstProductPrice)
    this.elements.productPrices().last().should("contain.text", lastProductPrice)
  }
}

export default new InventoryPage()