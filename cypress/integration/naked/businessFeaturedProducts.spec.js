context('Business featured products', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8200/business_featured_options')
  })

  it('Check UI', () => {
    cy.get('.featured-products-section').should('exist')
  })
})
