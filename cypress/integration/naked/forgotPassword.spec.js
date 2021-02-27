context('Forgot password', () => {
  beforeEach(() => {
    cy.visit('/forgot_password')
  })

  it('Check UI', () => {
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/users/forgot**').as('postforgot')
    cy.get('input').should('be.visible')
    cy.get('button').should('be.visible')
  })

  it('Send Email', () => {
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/users/forgot**').as('postforgot')
    cy.get('input').type('superadmin@ordering.co')
    cy.get('button').click()
    cy.wait('@postforgot').its('status').should('eq', 200)
  })
})
