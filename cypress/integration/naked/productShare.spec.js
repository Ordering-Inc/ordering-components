context('Product share', () => {
  beforeEach(() => {
    cy.visit('/product_share')
  })
  it('Check UI', () => {
    cy.get('#app > button').click()
    cy.get('.at-svc-facebook').click()
  })

  /* ckeck the share of the product */
})
