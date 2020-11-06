context('Main Search', () => {
  beforeEach(() => {
    cy.visit('/main_search')
  })

  it('Check UI', () => {
    cy.get('.order-type-select').should('exist')
  })
})
