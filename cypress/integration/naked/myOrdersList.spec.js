context('My orders list', () => {
  beforeEach(() => {
    cy.visit('/my_orders_list')
  })

  it('Check UI', () => {
    cy.get('.orders').should('exist')
  })
})
