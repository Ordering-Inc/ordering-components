context('Product share', () => {
  beforeEach(() => {
    cy.visit('/product_share')
  })
  it('Check UI', () => {
    cy.get('button').contains('share').click()
    cy.get('.a2a_kit').should('exist')
  })
})
