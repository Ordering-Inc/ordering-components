context('My orders', () => {
  beforeEach(() => {
    cy.visit('/my_orders')
  })

  it('Check UI', () => {
    cy.get('h1').contains('Active Orders').should('exist')
    cy.get('h1').contains('Previous Orders').should('exist')
  })
})
