context('review orders', () => {
  beforeEach(() => {
    cy.login('sergio+admin@ordering.co', 'test2020')
    cy.visit('/review_orders')
  })

  it('Check UI', () => {
    cy.wait(4000)
    cy.get('form > :nth-child(2)').should('be.visible')
    cy.get('input[name=comments]').type('great!')
    cy.get('button').click()
  })
})
