context('Payment option cash', () => {
  beforeEach(() => {
    cy.visit('/payment_option_cash')
  })

  it('Check UI', () => {
    cy.get('input[name=cash]').should('be.visible')
  })

  // Start with orderTotal equals 5

  it('Send cash number incorrect', () => {
    cy.get('input[name=cash]').type(3)
    cy.get('.error').should('contain.text', 'This value must be greater than order total: 5')
  })

  it('Send cash number correct', () => {
    cy.get('input[name=cash]').type(888)
    cy.get('.error').should('not.be.visible')
  })
})
