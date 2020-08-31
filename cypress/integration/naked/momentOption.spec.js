context('Moment option', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8200/moment_option')
  })

  it('Check UI', () => {
    cy.get('.select-date').should('exist')
    cy.get('.select-hour').should('exist')
  })
})
