context('Business Listing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8200/business_listing')
  })

  it('Shows business cards', () => {
    cy.get('.biz-card').should('exist')
  })

  it('Each card has all the info we need to know', () => {
    cy.get('.name').should('exist')
    cy.get('.opening-hours').should('exist')
    cy.get('.minimum-order').should('exist')
    cy.get('.delivery-fee').should('exist')
    cy.get('.description').should('exist')
    cy.get('.distance').should('exist')
    cy.get('.delivery-time').should('exist')
    cy.get('.reviews').should('exist')
  })
})
