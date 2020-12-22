context('Product images', () => {
  beforeEach(() => {
    cy.visit('/product_images')
  })

  it('Check UI', () => {
    cy.get('#product-image').should('exist')
    cy.get('.img-hero').should('be.visible').click()
    cy.get('.image-modal').should('exist')
  })
})
