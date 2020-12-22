context('Language Selector', () => {
  beforeEach(() => {
    cy.visit('/language_selector')
  })

  it('Check UI', () => {
    cy.get('.languages-select').should('exist')
    cy.get('select').select('French').should('have.value', 'FR')
  })
})
