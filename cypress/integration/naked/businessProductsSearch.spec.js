context('Business Products search', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8200/business_products_search')
  })

  it('Check UI', () => {
    cy.get('input[type=search]').should('exist')
  })
})
