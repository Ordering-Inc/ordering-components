context('Sign Up Form', () => {
  beforeEach(() => {
    cy.visit('/session_manager')
  })

  it('Logout', () => {
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/auth**').as('postLogin')
    cy.get('input[name=email]').type('superadmin@ordering.co')
    cy.get('input[name=password]').type('super')
    cy.get('button').contains('Login').click()
    cy.wait('@postLogin').its('status').should('eq', 200)
    cy.get('button').click()
  })
})
