context('Order details', () => {
  beforeEach(() => {
    cy.visit('/order_details')
  })

  it('Check UI', () => {
    cy.get('input[name=spot]').should('exist')
    cy.get('.order-card').should('exist')
  })
})
