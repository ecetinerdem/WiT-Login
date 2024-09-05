describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})



describe('Login Form Validation', () => {
  it('should display error messages for invalid email and password', () => {
    cy.visit('http://localhost:5173/'); 

    cy.get('input[name="email"]').type('invalid-email');
    cy.get('input[name="password"]').type('12345');
    
  });
});


describe('Login Form checked', () => {
  it('should check for email, password and cheked', () => {
    cy.visit('http://localhost:5173/'); 

    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('12345');
    cy.get('input[name="terms"]').should('not.be.checked');
    
  });
});
