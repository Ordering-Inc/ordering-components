context('Messages', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8200/messages')
  })

  it('Check UI', () => {
    cy.get('textarea').should('be.visible')
    cy.get('#chat_image').should('be.visible')
    cy.get('button').contains('Send').should('be.visible')
  })

  it('Send message', () => {
    cy.visit('http://localhost:8200/login')
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/auth**').as('postLogin')
    cy.get('button').contains('By Email').click()
    cy.get('input[name=email]').type('superadmin@ordering.co')
    cy.get('input[name=password]').type('super')
    cy.get('button').contains('Login').click()
    cy.wait('@postLogin').its('status').should('eq', 200)
    cy.visit('http://localhost:8200/messages')
    cy.get('textarea').type('test 123')
    cy.get('button').contains('Send').click()
  })
})
