class InventoryPage {
  elements = {
    productNameLinks: () => cy.get("#inventory_container a>div"),
    addToCartBtns: () => cy.get(".pricebar>button")
  }
}

export default new InventoryPage()