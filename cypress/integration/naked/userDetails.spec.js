context('User details', () => {
  beforeEach(() => {
    cy.visit('/user_details')
  })

  it('Check UI', () => {
    cy.get('strong').should('be.visible')
    // cy.get('.btn-edit').should('be.visible').click()
    // cy.get('input[name=coupon]').type('test')
    // cy.get('button').contains('Apply').should('be.visible').click()
  })
})
