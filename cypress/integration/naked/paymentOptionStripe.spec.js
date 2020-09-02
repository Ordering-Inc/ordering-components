context('Payment option stripe', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8200/payment_option_stripe')
  })

  it('Check UI', () => {
    cy.get('button').contains('Stripe').should('be.visible').click()
    cy.get('.modal-info').should('exist')
  })
})
