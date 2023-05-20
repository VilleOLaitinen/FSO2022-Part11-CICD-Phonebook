describe('Phonebook', () => {
  beforeEach(() => {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
  })

  it('front page can be opened', () => {
    cy.visit('http://localhost:3001')
    cy.contains('Phonebook')
    cy.contains('Add a new')
  })
})