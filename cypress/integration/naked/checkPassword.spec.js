context('Check password', () => {
  beforeEach(() => {
    cy.visit('/check_password')
  })

  it('Check UI', () => {
    cy.get('.check-password').should('exist')
    cy.get('input[name=password').should('be.visible')
    cy.get('button').contains('Check').should('be.visible')
  })

  it('Check password', () => {
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/check_password**').as('checkPassword')
    cy.get('input[name=password').type('test2020')
    cy.get('button').contains('Check').click()
    cy.wait('@checkPassword').its('status').should('eq', 200)
  })
})
