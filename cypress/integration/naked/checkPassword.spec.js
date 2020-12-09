context('Check password', () => {
  beforeEach(() => {
    cy.visit('/login')
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/auth**').as('postLogin')
    cy.get('button').contains('By Email').click()
    cy.get('input[name=email]').type('sergio+admin@ordering.co')
    cy.get('input[name=password]').type('test2020')
    cy.get('button').contains('Login').click()
    cy.wait('@postLogin').its('status').should('eq', 200)
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
    cy.request('@checkPassword').its('status').should('eq', 200)
  })
})
