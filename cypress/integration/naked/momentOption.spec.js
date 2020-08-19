context('Moment option', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8200/moment_option')
  })

  it('Check UI', () => {
    cy.get('.select-min-date').should('exist')
    cy.get('.select-min-hour').should('exist')
    cy.get('.select-max-date').should('exist')
    cy.get('.select-max-hour').should('exist')
  })
})
