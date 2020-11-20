context('Language examples', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8200/languages_examples')
  })

  it('Check UI', () => {
    cy.get('select').should('be.visible')
    cy.get('button').should('be.visible')
  })

  it('Spanish', () => {
    cy.get('select').select('Spanish')
    cy.get('button').click()
  })

  it('Arabic', () => {
    cy.get('select').select('Arabic')
    cy.get('button').click()
  })

  it('Japanese', () => {
    cy.get('select').select('Japanese')
    cy.get('button').click()
  })
})
