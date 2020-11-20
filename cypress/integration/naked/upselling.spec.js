context('Upselling', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8200/upselling')
  })

  it('Check UI', () => {
    cy.get('[name=product]').should('be.visible')
  })

  it('Add product', () => {
    cy.get(':nth-child(1) > button').click()
  })
})
