///<reference types="cypress"/>

describe('Twitter Clone - Login', () => {

    beforeEach(() => {
        cy.intercept({
            
            method: 'GET',
            hostname: 'res.cloudinary.com' 
       }, {
           statusCode:200,
           fixture: 'download' 
       }).as('cloudinary'); 
    });

    it('Ao autenticar com credenciais válidas, deve ser direcionado para o feed', () => {
     
       cy.login();

       cy.visit('/');

        cy.get('nav ul li')
            .should('be.visible')
            .and('have.length',6) 
    });
    
});