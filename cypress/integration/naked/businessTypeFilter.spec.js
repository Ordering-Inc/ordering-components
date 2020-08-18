context('Login form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8200/business_type_filter')
  })

  it('Check UI', () => {
    cy.get('.select-list').should('exist')
    cy.get('.filter-list').should('exist')
  })
})
