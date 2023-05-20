describe('Phonebook', () => {
  beforeEach(() => {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    cy.visit('http://localhost:3001')
  })

  it('front page can be opened', () => {
    cy.contains('Phonebook')
    cy.contains('Add a new')
  })

  it('can add a new person', () => {
    cy.get('#name').type('testuser')
    cy.get('#number').type('111-232323')
    cy.get('#add').click()
    cy.contains('testuser has been added!')
  })

  it('can delete an existing person', () => {
    cy.get('#name').type('tobedeleted')
    cy.get('#number').type('111-222233')
    cy.get('#add').click()
    cy.contains('tobedeleted 111-222233').contains('delete').click()
    cy.on('window:confirm', (text) => {
      expect(text).to.contains('Do you really want to delete tobedeleted?')
    })
    cy.contains('tobedeleted has been successfully deleted.')
  })
})


