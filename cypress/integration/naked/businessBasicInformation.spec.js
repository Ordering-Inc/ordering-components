context('Businesses Basic information', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8200/business_basic_information')
  })

  it('Shows business basic component', () => {
    cy.get('.bus-basic').should('exist')
  })
})
