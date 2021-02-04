/// <reference types="cypress" />

context('Login form', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('Check UI', () => {
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/auth**').as('postLogin')
    cy.get('button').contains('By Email').should('be.visible').click()
    cy.get('input[name=email]').should('be.visible')
    cy.get('button').contains('By Cellphone').should('be.visible').click()
    cy.get('input[name=cellphone]').should('be.visible')
    cy.get('input[name=password]').should('be.visible')
    cy.get('button').contains('Login').should('be.visible')
  })

  it('Login by email', () => {
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/auth**').as('postLogin')
    cy.get('button').contains('By Email').click()
    cy.get('input[name=email]').type('sergio+admin@ordering.co')
    cy.get('input[name=password]').type('test2020')
    cy.get('button').contains('Login').click()
    cy.wait('@postLogin').its('status').should('eq', 200)
  })

  it('Login by cellphone', () => {
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/auth**').as('postLogin')
    cy.get('button').contains('By Cellphone').click()
    cy.get('input[name=cellphone]').type('0123495721')
    cy.get('input[name=password]').type('super')
    cy.get('button').contains('Login').click()
    // cy.wait('@postLogin').its('status').should('eq', 200)
  })
})
