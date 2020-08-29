context('Main Search', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8200/main_search')
  })

  it('Check UI', () => {
    cy.get('.order-type-select').should('exist')
  })
})
