context('Business', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8200/dakotawine')
  })
  it('Filt items', () => {
    cy.get('#app > :nth-child(4) > :nth-child(2)').click()
    cy.get('#app > :nth-child(4) > :nth-child(3)').click()
    cy.get('#app > :nth-child(4) > :nth-child(4)').click()
    cy.get('#app > :nth-child(4) > :nth-child(5)').click()
    cy.get('#app > :nth-child(4) > :nth-child(1)').click()
    cy.get('input').type('Celery')
    cy.get('input').clear()
    cy.get('#app > :nth-child(4) > :nth-child(3)').click()
    cy.get('input').type('Wine')
    cy.get('input').clear()
  })
})
