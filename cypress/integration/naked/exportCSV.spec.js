context('Export CSV', () => {
  beforeEach(() => {
    cy.visit('/export_csv')
  })

  it('Check UI', () => {
    cy.get('.csv-export').should('exist')
    cy.get('button').contains('Export').should('be.visible')
    cy.get('button').contains('Export filtered').should('be.visible')
  })

  it('Export', () => {
    cy.get('button').contains('Export').click()
    cy.get('p').contains('loading...')
    cy.get('button').contains('Export filtered').click()
    cy.get('p').contains('loading...')
  })

})
