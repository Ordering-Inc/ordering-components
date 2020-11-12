context('business reviews', () => {
  beforeEach(() => {
    cy.visit('/business_reviews')
  })

  it('Check UI', () => {
    cy.get('.actions').should('exist')
    cy.get('button').contains('Date').should('be.visible')
    cy.get('button').contains('4+').should('be.visible')
    cy.get('button').contains('3+').should('be.visible')
    cy.get('button').contains('2+').should('be.visible')
    cy.get('button').contains('1+').should('be.visible')

    cy.get('ul').should('exist')
  })
})
