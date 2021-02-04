
context('google login', () => {
  beforeEach(() => {
    cy.visit('/google_login')
  })

  it('Check UI', () => {
    cy.server({ method: 'POST' })
    cy.get('div#my-signin2').click()
  })
})
