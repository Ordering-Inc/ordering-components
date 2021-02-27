context('Businesses Map', () => {
  beforeEach(() => {
    cy.visit('/business_map')
  })

  it('Check UI', () => {
    cy.get('p').should('exist')
  })

  it('Creating new user', () => {
    cy.get('p').click()
  })
})
