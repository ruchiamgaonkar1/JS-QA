describe('Google search', () => {
    it('Look for Cypress in searchbox', () => {
        cy.visit("https://www.google.com/")
        cy.get("[name='q']").type('Cypress{enter}') 
        cy.get('.results').should('be.visible')
          .contains('cypress') 
    });
});