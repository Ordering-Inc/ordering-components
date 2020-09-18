
context('google login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8200/google_login')
  })

  it('Check UI', () => {
    cy.server({ method: 'POST' })
    cy.get('button').click()
  })
})
