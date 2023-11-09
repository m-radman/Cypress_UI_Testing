class ProductPage {
  elements = {
    addToCartBtn: () => cy.get(".btn_primary"),
    backToProductsBtn: () => cy.get("#back-to-products")
  }
}

export default new ProductPage()