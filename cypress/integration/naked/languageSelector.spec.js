context('Language Selector', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8200/language_selector')
  })

  it('Check UI', () => {
    cy.get('.languages-select').should('exist')
    cy.get('select').select('French').should('have.value', 'FR')
  })
})
