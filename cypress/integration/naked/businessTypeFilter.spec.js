context('Business type filter', () => {
  beforeEach(() => {
    cy.visit('/business_type_filter')
  })

  it('Check UI', () => {
    cy.get('.select-list').should('exist')
    cy.get('.filter-list').should('exist')
  })
})
