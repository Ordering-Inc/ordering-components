context('Product images', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8200/product_images')
  })

  it('Check UI', () => {
    cy.get('#product-image').should('exist')
    cy.get('.img-hero').should('be.visible').click()
    cy.get('.image-modal').should('exist')
  })
})
