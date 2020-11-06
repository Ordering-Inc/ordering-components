context('Business sort control', () => {
  beforeEach(() => {
    cy.visit('/sort_options')
  })

  it('Check UI', () => {
    cy.get('.select-list').should('exist')
  })
})
