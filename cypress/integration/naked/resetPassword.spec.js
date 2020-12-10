/// <reference types="cypress" />

context('Reset password form', () => {
  beforeEach(() => {
    cy.visit('/reset_password')
  })

  it('Check UI', () => {
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/users/reset**').as('resetPassword')
    cy.get('[name="password"]').should('be.visible')
    cy.get('[name="confirm-password"]').should('be.visible')
    cy.get('button').should('be.visible').click()
  })

  it('Reset Password', () => {
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/users/reset**').as('resetPassword')
    cy.get('button').click()
    cy.get('[name="password"]').type('test1234')
    cy.get('[name="confirm-password"]').type('test1234')
    cy.get('button').click()
    cy.wait('@resetPassword').its('status').should('eq', 200)
  })
})
