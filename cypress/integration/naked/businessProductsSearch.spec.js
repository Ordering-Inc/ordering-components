context('Business Products search', () => {
  beforeEach(() => {
    cy.visit('/business_products_search')
  })

  it('Check UI', () => {
    cy.get('input[type=search]').should('exist')
  })
})
