context('Search options', () => {
  beforeEach(() => {
    cy.visit('/search_options')
  })

  it('Check UI', () => {
    cy.get('.search-options').should('exist')

    cy.get('button').contains('Order type').click()
    cy.get('.order-section').should('exist')

    cy.get('button').contains('Moment').click()
    cy.get('.moment-section').should('exist')

    cy.get('button').contains('Address').click()
    cy.get('.address-section').should('exist')
  })
})
