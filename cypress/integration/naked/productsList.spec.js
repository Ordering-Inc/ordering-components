context('Products list', () => {
  beforeEach(() => {
    cy.visit('/products_list')
  })

  it('Check UI', () => {
    cy.get('.products-list').should('exist')
  })
})
