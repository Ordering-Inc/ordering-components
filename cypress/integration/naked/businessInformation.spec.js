context('Sign Up Form', () => {
  beforeEach(() => {
    cy.visit('/business_information')
  })

  it('Check UI', () => {
    cy.get('button[name=time]').should('be.visible')
    cy.get('button[name=location]').should('be.visible')
    cy.get('button[name=photos]').should('be.visible')
    cy.get('button[name=videos]').should('be.visible')
  })

  it('View information', () => {
    cy.get('button[name=time]').click()
    cy.get('button[name=location]').click()
    cy.get('button[name=photos]').click()
    cy.get('button[name=videos]').click()
  })
})
