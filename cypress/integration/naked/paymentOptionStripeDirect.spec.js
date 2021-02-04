context('Payment option stripe direct', () => {
  beforeEach(() => {
    cy.login('sergio+admin@ordering.co', 'test2020')
    cy.visit('/payment_option_stripe_direct')
  })

  it('Check UI', () => {
    cy.get('button').contains('Stripe Direct').should('be.visible').click()
    cy.get('.popup-dialog').should('exist')
  })
})
