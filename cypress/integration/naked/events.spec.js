context('events', () => {
  beforeEach(() => {
    cy.visit('/events')
  })

  it('Check UI', () => {
    cy.get('button').should('be.visible')
  })

  it('emit event', () => {
    cy.get('button').click()
  })
})
