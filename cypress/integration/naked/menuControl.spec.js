context('Menu control', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8200/menu_control')
  })

  it('Check UI', () => {
    cy.get('.menu-control').should('exist')
  })
})
