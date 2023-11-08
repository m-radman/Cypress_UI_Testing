export function enterText(element: Cypress.Chainable<JQuery<HTMLElement>>, text: string) {
  element.type(text)
}

export function clickElement(element: Cypress.Chainable<JQuery<HTMLElement>>) {
  element.click()
}