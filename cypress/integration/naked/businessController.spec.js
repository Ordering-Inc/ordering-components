context('Business Controller', () => {
  beforeEach(() => {
    cy.visit('/business_controller')
  })

  it('Check UI', () => {
    cy.get('.single-business-card').should('exist')
  })
})
