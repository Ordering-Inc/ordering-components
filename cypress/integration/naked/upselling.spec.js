context('Upselling', () => {
  beforeEach(() => {
    cy.visit('/upselling')
  })

  it('Check UI', () => {
    cy.get('[name=product]').should('be.visible')
  })

  it('Add product', () => {
    cy.get(':nth-child(1) > button').click()
  })
})
