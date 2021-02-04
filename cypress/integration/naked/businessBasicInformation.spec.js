context('Businesses Basic information', () => {
  beforeEach(() => {
    cy.visit('/business_basic_information')
  })

  it('Shows business basic component', () => {
    cy.get('.bus-basic').should('exist')
  })

  it('Shows modal business basic component', () => {
    cy.get('button').contains('More information').click()
    cy.get('.popup-dialog').should('exist')
  })
})
