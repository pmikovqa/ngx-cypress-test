/// <reference types="cypress" />

context('cypress tests in ngx', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200')
  })

    it('Test the first element', () => {
      cy.get('[data-name="menu-2"]').click()
      cy.contains('.menu-title', 'Layout').click()

    })
})
