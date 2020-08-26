context('Products list', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8200/products_list')
  })

  it('Check UI', () => {
    cy.get('.products-list').should('exist')
  })
})
