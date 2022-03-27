describe('Mobile App Testing', () => {
  beforeEach(() => {
    cy.viewport('iphone-x');
    cy.visit('/login');
  });

  it('should render an avatar', () => {
    cy.get('ion-avatar').should('be.visible');
  });

  it('should show required error message if fields are empties', () => {
    cy.get('ion-button').click();
    cy.get('.input__error').each((item) => {
      expect(item).to.contain('Campo obligatorio');
    });
  });

  it('should the form have two inputs', () => {
    cy.get('ion-input').should('have.length', 2);
  });

  it('should show bad format error message in email field', () => {
    cy.get('ion-input').eq(0).type('test');
    cy.get('ion-input').eq(1).type('12345');
    cy.get('ion-button').click();
    cy.get('.input__error').should('contain.text', 'Formato email incorrecto');
  });

  it('should show minlength error message in password field', () => {
    cy.get('ion-input').eq(0).type('test@mail.com');
    cy.get('ion-input').eq(1).type('1234');
    cy.get('ion-button').click();
    cy.get('.input__error').should('contain.text', 'Máx. 5 caracteres');
  });

  it('should not show errors if form is valid', () => {
    cy.get('ion-input').eq(0).type('test@mail.com');
    cy.get('ion-input').eq(1).type('12345');
    cy.get('ion-button').click();
    cy.get('.input__error').should('not.exist');
  });
});
