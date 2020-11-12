context('Menu control', () => {
  beforeEach(() => {
    cy.visit('/menu_control')
  })

  it('Check UI', () => {
    cy.get('.menu-control').should('exist')
  })
})
