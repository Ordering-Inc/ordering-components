context('Pages', () => {
  beforeEach(() => {
    cy.visit('/pages')
  })

  it('Check UI', () => {
    cy.get('.page').should('exist')
  })
})
