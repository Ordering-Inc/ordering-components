context('Businesses Basic information', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8200/business_basic_information')
  })

  it('Shows business basic component', () => {
    cy.get('.bus-basic').should('exist')
  })

  it('Shows modal business basic component', () => {
    cy.get('button').contains('More information').click()
    cy.get('.modal-info').should('exist')
  })
})
