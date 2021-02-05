context('Phone Autocomplete', () => {
  beforeEach(() => {
    cy.visit('/login')
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/auth**').as('postLogin')
    cy.get('button').contains('By Email').click()
    cy.get('input[name=email]').type('superadmin@ordering.co')
    cy.get('input[name=password]').type('1234567890')
    cy.get('button').contains('Login').click()
    cy.wait('@postLogin').its('status').should('eq', 200)
    cy.visit('/phone_autocomplete')
  })

  it('Check UI', () => {
    cy.get('#phone-input').should('exist')
  })

  it('Creating new user', () => {
    cy.get('#phone-input').type('1234567890')
    cy.get('#phone-inputautocomplete-list > div').click()
  })
})
