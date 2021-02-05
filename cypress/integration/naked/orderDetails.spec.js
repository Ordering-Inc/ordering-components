context('Order details', () => {
  beforeEach(() => {
    cy.login('sergio+admin@ordering.co', 'test2020')
    cy.visit('/order_details/77bdc3ad-cb88-47fe-af40-9763e428a7c3')
  })

  it('Check UI', () => {
    cy.get('input[name=spot]').should('exist')
    cy.get('.order-card').should('exist')
  })
})
