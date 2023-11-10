export function enterText(element: Cypress.Chainable<JQuery<HTMLElement>>, text: string) {
  element.type(text)
}

export function clickElement(element: Cypress.Chainable<JQuery<HTMLElement>>) {
  element.click()
}

export interface CheckoutData {
  firstName: string,
  lastName: string,
  zipCode: string
}

export enum Products {
  backpack,
  bikeLight,
  boltTShirt,
  fleeceJacket,
  Onesie,
  testAllTheThings_tShirt
}

export enum CartItems {
  first,
  second,
  third,
  fourth,
  fifth
}

export enum SortOptions {
  AtoZ = "az",
  ZtoA = "za",
  LowToHigh = "lohi",
  HighToLow = "hilo"
}