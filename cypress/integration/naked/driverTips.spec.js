context('Driver tips', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8200/driver_tips')
  })

  it('Check UI', () => {
    cy.get('.tips-list').should('exist')
    cy.get('.tips-list input').check(['0', '10', '15', '20', '25'])
  })
})
