context('Payment option stripe', () => {
  beforeEach(() => {
    cy.login('sergio+admin@ordering.co', 'test2020')
    cy.visit('/payment_option_stripe')
  })

  it('Check UI', () => {
    cy.get('button').contains('Add card').should('be.visible').click()
    cy.get('.popup-dialog').should('exist')
  })
})
