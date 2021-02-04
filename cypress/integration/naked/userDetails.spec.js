context('User details', () => {
  beforeEach(() => {
    cy.login('sergio+admin@ordering.co', 'test2020')
    cy.visit('/user_details')
  })

  it('Check UI', () => {
    cy.get('strong').should('contain.text', 'Customer Details')
    cy.wait(4000)
    cy.get('button.btn-edit').should('be.visible').click()
  })
})
