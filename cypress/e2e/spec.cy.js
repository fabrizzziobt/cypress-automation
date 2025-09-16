describe('template spec', () => {
  it('passes', () => {
    //cy.visit('https://example.cypress.io')
    cy.visit('https://ricardo-financial-visualizer.netlify.app/')
  })
})

describe('It does not do much', () => {
  it('Does not do much', () => {
    expect(true).to.equal(true)
  })
})