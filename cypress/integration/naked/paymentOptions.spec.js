context('Payment options', () => {
  beforeEach(() => {
    cy.visit('/payment_options')
  })

  it('Check UI', () => {
    cy.get('.payment-options').should('exist')
  })
})
