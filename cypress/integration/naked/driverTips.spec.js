context('Driver tips', () => {
  beforeEach(() => {
    cy.visit('/driver_tips')
  })

  it('Check UI', () => {
    cy.get('.tips-list').should('exist')
    cy.get(':nth-child(3) > button').click()
  })
})
