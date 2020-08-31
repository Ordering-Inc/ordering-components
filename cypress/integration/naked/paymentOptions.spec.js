context('Payment options', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8200/payment_options')
  })

  it('Check UI', () => {
    cy.get('.payment-options').should('exist')
  })
})
