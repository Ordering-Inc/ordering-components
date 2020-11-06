context('Payment option stripe direct', () => {
  beforeEach(() => {
    cy.visit('/payment_option_stripe_direct')
  })

  it('Check UI', () => {
    cy.get('button').contains('Stripe Direct').should('be.visible').click()
    cy.get('.modal-info').should('exist')
  })
})
