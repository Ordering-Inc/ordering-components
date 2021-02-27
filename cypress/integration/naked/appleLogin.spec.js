context('Apple Login', () => {
  beforeEach(() => {
    cy.visit('/apple_login')
  })

  it('Check UI', () => {
    cy.get('h2').should('contain.text', 'AppleLogin')
    cy.get('img').should('be.visible')
  })

  it('Login with apple', () => {
    cy.get('img').click()
  })
})
