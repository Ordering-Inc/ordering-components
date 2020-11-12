context('Floating button', () => {
  beforeEach(() => {
    cy.visit('/floating_button')
  })

  it('Check UI', () => {
    cy.get('button').contains('View order').should('exist')
  })

  it('Click button', () => {
    cy.get('button').contains('View order').click()
  })
})
