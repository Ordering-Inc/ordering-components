/// <reference types="cypress" />

context('review orders', () => {
  beforeEach(() => {
    cy.visit('/my_orders')
  })

  it('Check UI', () => {
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/business/41/reviews/**').as('reviews')
    cy.get('form > :nth-child(2)').should('be.visible')
    cy.get('a').click()
    cy.get('#Comments').type('great!')
    cy.get('button').click()
    cy.wait('@reviews').its('status').should('eq', 200)
  })
})
