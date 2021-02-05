context('Reset password form', () => {
  beforeEach(() => {
    cy.visit('/password/reset')
  })

  it('Check UI', () => {
    cy.get('[name="random"]').type('testing')
    cy.get('[name="code"]').type('testing')
    cy.get('button').should('be.visible').click()
  })
})
