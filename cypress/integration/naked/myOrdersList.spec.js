context('My orders list', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8200/my_orders_list')
  })

  it('Check UI', () => {
    cy.get('.orders').should('exist')
  })
})
