context('Business products categories', () => {
  beforeEach(() => {
    cy.visit('/business_products_categories')
  })

  it('Check UI', () => {
    cy.get('.categories-products').should('exist')
  })
})
