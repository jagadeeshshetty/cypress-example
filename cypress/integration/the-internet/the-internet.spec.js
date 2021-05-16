
describe('Test Login', () => {

    it('Verify login with valid credentials.', () => {
        // 1. Invoke \'the-internet\' URL.
        cy.visit('http://the-internet.herokuapp.com/login');
        // 2. Enter valid usernamd.
        cy.get('#username').type('tomsmith');
        // 3. Enter valid password.
        cy.get('#password').type('SuperSecretPassword!');
        // 4. Click on Login button.
        cy.get('.radius').click();
        // 5. Verify 'You logged into a secure area!' message appears.
        cy.get('.flash.success').should('be.visible');
    });

    it('Verify login with invalid credentials.', () => {
        // 1. Invoke \'the-internet\' URL.
        cy.visit('http://the-internet.herokuapp.com/login');
        // 2. Enter valid usernamd.
        cy.get('#username').type('invalid');
        // 3. Enter valid password.
        cy.get('#password').type('invalid');
        // 4. Click on Login button.
        cy.get('.radius').click();
        // 5. Verify 'You logged into a secure area!' message appears.
        cy.get('.flash.success').should('be.visible');
    });

});