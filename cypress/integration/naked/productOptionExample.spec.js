
context('product option example', () => {
  beforeEach(() => {
    cy.visit('/product_option_example')
  })

  it('Check UI', () => {
    cy.get('div').contains('Size').should('be.visible')
    cy.get('div').contains('Ingredients').should('be.visible')
    cy.get('div').contains('combo').should('be.visible')
    cy.get('textarea').should('be.visible')
  })

  it('Choose ingredients', () => {
    cy.get('div').contains('medium').click()
    cy.get('div').contains('Onion').click()
    cy.get('div').contains('Cheese').click()
    cy.get('div').contains('No').click()
    cy.get('textarea').type('test 123')
  })
})
