context('Drivers list', () => {
  beforeEach(() => {
    cy.visit('/drivers_list')
  })

  it('Check UI', () => {
    cy.get('.drivers-list').should('exist')
  })
})
