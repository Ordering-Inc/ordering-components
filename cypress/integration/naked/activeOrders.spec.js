context('Active orders', () => {
  beforeEach(() => {
    cy.login('sergio+admin@ordering.co', 'test2020')
    cy.visit('/active_orders')
  })

  it('Check UI', () => {
    cy.get('p').contains('Loading orders...').should('exist')
  })

  it('Check if there are orders', () => {
    cy.get('p').should('not.have.text', 'No have orders')
    cy.get('.order').should('exist')
  })
})
