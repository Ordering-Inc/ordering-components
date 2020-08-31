context('My orders', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8200/my_orders')
  })

  it('Check UI', () => {
    cy.get('h1').contains('Active Orders').should('exist')
    cy.get('h1').contains('Previous Orders').should('exist')
  })
})
