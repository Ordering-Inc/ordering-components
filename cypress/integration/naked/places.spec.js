context('Places', () => {
  beforeEach(() => {
    cy.visit('/places')
  })

  it('Check UI', () => {
    cy.get('[name="address"]').should('be.visible')
    cy.get('[type="button"]').contains('GPS').should('be.visible')
    cy.get('textarea').should('be.visible')
    cy.get('input[name="internal_number"]').should('be.visible')
    cy.get('input[name="zipcode"]').should('be.visible')
    cy.get('[type="submit"]').contains('Add').should('be.visible')
  })

  it('Add Address', () => {
    cy.get('textarea').type('test 123')
    cy.get('input[name="internal_number"]').type('1234567890')
    cy.get('input[name="zipcode"]').type('5001')
    cy.get('[type="submit"]').click()
  })
})
