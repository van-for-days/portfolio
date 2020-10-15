describe('Projects', () => {
  
  it('displays a list of project cards', () => {
    cy.visit('http://localhost:3000/projects/#project-content')
    cy.get('.project-content').contains('Projects')
  })
  
  it('clicking "more" on a card opens up the full project details', () => {
    cy.visit('http://localhost:3000/projects/#project-content')
    cy.get('.open-modal').first().click()
    cy.contains('This is a dynamic card description').should('be.visible') 
  })

  it('has a button the close the pop up window', () => {
    cy.visit('http://localhost:3000/projects/#project-content')
    cy.get('.open-modal').first().click()
    cy.get('.close-modal').click() 
    cy.get('.close-modal').should('not.be.visible') 
  })
})