context('Business Controller', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8200/business_controller')
  })

  it('Check UI', () => {
    cy.get('.single-business-card').should('exist')
  })
})
