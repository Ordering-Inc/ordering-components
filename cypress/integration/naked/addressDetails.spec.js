context('Address details', () => {
  beforeEach(() => {
    cy.visit('/address_details')
  })

  it('Check UI', () => {
    cy.get('p').should('contain.text', 'Loading...')
    cy.get('img').should('exist')
  })
})
