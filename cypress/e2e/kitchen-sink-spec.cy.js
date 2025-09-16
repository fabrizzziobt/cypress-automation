describe('Visits the Kitchen Sink', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink')
  })
})