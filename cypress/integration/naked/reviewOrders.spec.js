/// <reference types="cypress" />

context('review orders', () => {
  beforeEach(() => {
    cy.visit('/my_orders')
  })

  it('Check UI', () => {
    cy.server({ method: 'POST' })
    cy.get('form > :nth-child(2)').should('be.visible')
    cy.get('a').click()
    cy.get('#Comments').type("great!")
    cy.get('button').click()
  })
})
