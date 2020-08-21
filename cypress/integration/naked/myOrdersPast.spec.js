context('My orders past', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8200/my_orders_past')
  })

  it('Check UI', () => {
    cy.get('.previous-orders').should('exist')
  })
})
