context('Businesses List', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8200/businesses_list')
  })

  it('Check UI', () => {
    cy.get('button').contains('Delivery').should('be.visible')
    cy.get('button').contains('Pick up').should('be.visible')

    cy.get('button').contains('All').should('be.visible')
    cy.get('button').contains('Food').should('be.visible')
    cy.get('button').contains('Alcohol').should('be.visible')
    cy.get('button').contains('Groceries').should('be.visible')
    cy.get('button').contains('Laundry').should('be.visible')

    cy.get('input[type=text]').should('be.visible')
    cy.get('select').select('minimum').should('have.value', 'minimum')
  })

  it('Businesses list with filter params', () => {
    cy.server({ method: 'POST' })
    cy.route('/*/*/*/businesses**').as('postLogin')
    cy.get('button').contains('Delivery').should('be.visible').click()
    cy.get('p').contains('Loading businesses...')
    cy.wait('@postLogin').its('status').should('eq', 200)
  })

  it('Check Single business card component', () => {
    cy.get('.single-business-card').should('exist')
  })
})
