context('Sign Up Form', () => {
  beforeEach(() => {
    cy.visit('/signup')
  })

  it('Check UI', () => {
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/users**').as('postSignup')
    cy.get('input[name=name]').should('be.visible')
    cy.get('input[name=middle_name]').should('be.visible')
    cy.get('input[name=lastname]').should('be.visible')
    cy.get('input[name=second_lastname]').should('be.visible')
    cy.get('input[name=email]').should('be.visible')
    cy.get('input[name=password]').should('be.visible')
    cy.get('button').contains('Signup').should('be.visible').click()
    cy.get('button').contains('Continue as guest').should('be.visible').click()
  })

  it('signup', () => {
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/users**').as('postSignup')
    cy.get('input[name=name]').type('Super')
    cy.get('input[name=middle_name]').type('Admin')
    cy.get('input[name=lastname]').type('Ordering')
    cy.get('input[name=second_lastname]').type('co')
    cy.get('input[name=email]').type('superadmin@ordering.co')
    cy.get('input[name=password]').type('super')
    cy.get('button').contains('Signup').click()
    // cy.wait('@postSignup').its('status').should('eq', 200)
  })
})
