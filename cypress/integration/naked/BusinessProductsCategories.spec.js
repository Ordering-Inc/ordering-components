context('Business products categories', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8200/business_products_categories')
  })

  it('Check UI', () => {
    cy.get('.categories-products').should('exist')
  })
})
