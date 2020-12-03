context('Orders overview', () => {
  beforeEach(() => {
    cy.visit('/orders_overview')
  })

  it('Check UI', () => {
    cy.get('.orders-overview').should('exist')
  })
})
