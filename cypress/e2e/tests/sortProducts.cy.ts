import inventoryPage from "../pages/inventoryPage"
import { SortOptions } from "../helpers/utils"

describe("Sort products", () => {
  let firstProductName: string
  let lastProductName: string

  const lowestPrice = "7.99"
  const highestPrice = "49.99"

  beforeEach(() => {
    cy.loginUser(Cypress.env("username"), Cypress.env("password"))

    inventoryPage.elements.productNameLinks().first().invoke("text").then((item) => {
      firstProductName = item
    })
    inventoryPage.elements.productNameLinks().last().invoke("text").then((item) => {
      lastProductName = item
    })
  })

  it("Sort products by name", () => {
    inventoryPage.sortProducts(SortOptions.ZtoA)
    inventoryPage.assertNameSorting(lastProductName, firstProductName)

    inventoryPage.sortProducts(SortOptions.AtoZ)
    inventoryPage.assertNameSorting(firstProductName, lastProductName)
  })

  it("Sort products by price", () => {
    inventoryPage.sortProducts(SortOptions.LowToHigh)
    inventoryPage.assertPriceSorting(lowestPrice, highestPrice)

    inventoryPage.sortProducts(SortOptions.HighToLow)
    inventoryPage.assertPriceSorting(highestPrice, lowestPrice)
  })
})