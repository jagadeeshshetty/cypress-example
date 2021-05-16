
describe('Test Login', () => {

    it('1. Invoke \'the-internet\' URL.', () => {
        cy.visit('http://the-internet.herokuapp.com/login');
    });

    it('2. Enter valid usernamd.', () => {
        cy.get('#username').type('tomsmith');
    });

    it('3. Enter valid password.', () => {
        cy.get('#password').type('SuperSecretPassword!');
    });

    it('4. Click on Login button.', () => {
        cy.get('.radius').click();
    });
});