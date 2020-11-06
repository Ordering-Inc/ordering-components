context('Business featured products', () => {
  beforeEach(() => {
    cy.visit('/business_featured_options')
  })

  it('Check UI', () => {
    cy.get('.featured-products-section').should('exist')
  })
})
