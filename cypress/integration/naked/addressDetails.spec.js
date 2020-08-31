context('Address details', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8200/address_details')
  })

  it('Check UI', () => {
    cy.get('.title').should('exist')
    cy.get('img').should('exist')
  })
})
