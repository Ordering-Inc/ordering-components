context('Business sort control', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8200/sort_options')
  })

  it('Check UI', () => {
    cy.get('.select-list').should('exist')
  })
})
