context('popup Example', () => {
  beforeEach(() => {
    cy.visit('/popup_example')
  })

  it('Check UI', () => {
    cy.get(':nth-child(4) > .popup-dialog').should('be.visible')
  })

  it('Close and Open modals', () => {
    cy.get(':nth-child(4) > .popup-dialog > div > :nth-child(1)').click()
    cy.get(':nth-child(3) > .popup-dialog > div > :nth-child(1)').click()
    cy.get(':nth-child(2) > .popup-dialog > div > :nth-child(1)').click()
    cy.get(':nth-child(1) > .popup-dialog > div > :nth-child(1)').click()
    cy.get('#app > :nth-child(1)').click()
  })
})
