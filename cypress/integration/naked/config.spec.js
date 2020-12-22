context('config manager', () => {
  beforeEach(() => {
    cy.visit('/config_manager')
  })

  it('Check UI', () => {
    cy.get('input[name=decimal]').should('be.visible')
    cy.get('input[name=separator]').should('be.visible')
    cy.get('input[name=thousand]').should('be.visible')
    cy.get('input[name=currency]').should('be.visible')
    cy.get('input[name=inputFormat]').should('be.visible')
    cy.get('input[name=outputFormat]').should('be.visible')
    cy.get('[name=utc]').should('be.visible')
    cy.get('[name=formatTime]').should('be.visible')
    cy.get('[name=formatedTime]').should('be.visible')
    cy.get('[name=unit]').should('be.visible')
    cy.get('[name=distance]').should('be.visible')
    cy.get('[name=inputFormat]').should('be.visible')
    cy.get('[name=formatedDate]').should('be.visible')
  })

  it('parse number', () => {
    cy.get('input[name=decimal]').type(10)
    cy.get('input[name=separator]').type(',')
    cy.get('input[name=thousand]').type('.')
    cy.get('input[name=currency]').type('50').trigger('change')
    cy.get('input[name=numberParsed]').type('10').trigger('change')
  })

  it('parse distance', () => {
    cy.get('[name=unit]').click()
    cy.get('[name=distance]').type(1000)
  })
})
