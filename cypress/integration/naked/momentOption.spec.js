context('Moment option', () => {
  beforeEach(() => {
    cy.visit('/moment_option')
  })

  it('Check UI', () => {
    cy.get('.select-date').should('exist')
    cy.get('.select-hour').should('exist')
  })
})
