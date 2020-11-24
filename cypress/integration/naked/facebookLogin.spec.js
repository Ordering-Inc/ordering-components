context('Facebook Login', () => {
  beforeEach(() => {
    cy.visit('/facebook_login')
  })

  it('Check UI', () => {
    cy.get('button').should('be.visible')
  })

  it('Login with Facebook', () => {
    cy.get('button').click()
  })
})
