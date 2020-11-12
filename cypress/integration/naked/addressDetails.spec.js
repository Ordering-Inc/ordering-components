context('Address details', () => {
  beforeEach(() => {
    cy.visit('/address_details')
  })

  it('Check UI', () => {
    cy.get('.title').should('exist')
    cy.get('img').should('exist')
  })
})
