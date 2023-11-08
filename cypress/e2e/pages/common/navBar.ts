class NavBar {
  elements = {
    shoppingCartLink: () => cy.get(".shopping_cart_link"),
    shoppingCartBadge: () => cy.get(".shopping_cart_badge"),
    sidebarMenu: () => cy.get("#react-burger-menu-btn")
  }
}

export default new NavBar()