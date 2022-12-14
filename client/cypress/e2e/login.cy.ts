const email = Cypress.env('email');
const password = Cypress.env('password');
const baseUrl = Cypress.config('baseUrl');

describe('Login Page', () => {
  it('should display error message if you dont fill in the email or password', () => {
    cy.visit('/');

    cy.get('button[type="submit"]').dblclick();
    cy.get('.error-form').contains('E-mail é obrigatório');
    cy.get('.error-form').contains('Senha requerida');
  });

  it('should display an error message if email incorrect', () => {
    cy.get('input[name="email"]').type('test');
    cy.get('input[name="password"]').type('test');
    cy.get('.error-form').contains('Formato de endereço de e-mail inválido');
  });

  it('should display an error message if password incorrect', () => {
    cy.get('input[name="email"]').clear();
    cy.get('input[name="password"]').clear();
    cy.get('input[name="password"]').type('1a');
    cy.get('input[name="email"]').type('test');
    cy.get('.error-form').contains('A senha deve ter no mínimo 6 caracteres');
  });

  it('unregistered email', () => {
    cy.get('input[name="email"]').type('invalid@hotmail.com');
    cy.get('input[name="password"]').type('123456');
    cy.get('button[type="submit"]').click();
    cy.wait(1000);
    cy.get('.Toastify__toast-body').contains('Oops... credenciais inválidas');
    cy.get('.Toastify__toast-body').should('be.visible');
  });

  it('should redirect to dashboard', () => {
    cy.get('input[name="email"]').clear();
    cy.get('input[name="password"]').clear();
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.url().should('include', 'dashboard');
  });
});
