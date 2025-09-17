describe('Test AlphaVantage API Integration via Netlify App FrontEnd', () => {

  //beforeEach we will visit the app
  beforeEach('Visit the App', () => {
      cy.visit('https://ricardo-financial-visualizer.netlify.app/')

  })

  //Let Check Things are where they should be
  it('Checks main areas are where they should be', () => {
    cy.get('div.select-group-data').should('be.visible')

    // Get the input box, and button assert them
    cy.get('div.select-group-data').within(() => {
      cy.get('input').should('have.id', 'stock-symbol').and('be.visible')
      cy.get('button').contains('Fetch Data').should('be.visible')
    })
  })

  //Now Lets test for functionality with a valid stock symbol
  it('Fetches data for a valid stock symbol', () => {
    // Input a valid stock symbol
    cy.get('input#stock-symbol').type('IBM')

    // Click the fetch data button
    cy.get('button').contains('Fetch Data').click()
  
    // Wait for the data to load and check for the presence of the chart and information
    cy.get('canvas#chart-view', { timeout: 10000 }).should('have.attr', 'width')
    cy.get('div#info').invoke('text').should('match', /International Business Machines/)

  })
})