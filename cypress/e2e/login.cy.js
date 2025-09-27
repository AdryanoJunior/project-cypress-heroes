import userData from '../fixtures/user-data.json'

describe('Login - Casos de Teste', () => {

  beforeEach(() => {
    cy.visit('heroes')
  });

  it('Deve fazer login com sucesso', () => {
    cy.get('li > .undefined').click()
    cy.get('[data-cy="email"]').type(userData.userSuccess.username)
    cy.get('[data-cy="password"]').type(userData.userSuccess.password)
    cy.get('.text-white').click()
  })

  it('Deve aparecer uma mensagem de erro ao tentar fazer o login com os campos vazios', () => {
    cy.get('li > .undefined').click()
    cy.get('.text-white').click()
    cy.get('body').should('contain', 'Email is required')
    cy.get('body').should('contain', 'Password is required')
  });

  it('Deve aparecer uma mensagem de erro ao tentar logar só inserindo o email', () => {
    cy.get('li > .undefined').click()
    cy.get('[data-cy="email"]').type(userData.userSuccess.username)
    cy.get('.text-white').click()
    cy.get('body').should('contain', 'Password is required')
  });

  it('Deve aparecer uma mensagem de erro ao tentar logar só inserindo a password', () => {
    cy.get('li > .undefined').click()
    cy.get('[data-cy="password"]').type(userData.userSuccess.password)
    cy.get('.text-white').click()
    cy.get('body').should('contain', 'Email is required')
  });

  it('Deve aparecer uma mensagem de erro ao inserir email ou password inválidos', () => {
    cy.get('li > .undefined').click()
    cy.get('[data-cy="email"]').type(userData.userFail.username)
    cy.get('[data-cy="password"]').type(userData.userFail.password)
    cy.get('.text-white').click()
    cy.get('body').should('contain', 'Invalid email or password')
  });

  it('Deve aparecer uma mensagem de erro ao inserir email com formatação inválida', () => {
    cy.get('li > .undefined').click()
    cy.get('[data-cy="email"]').type('admintest.com')
    cy.get('[data-cy="password"]').type(userData.userSuccess.password)
    cy.get('.text-white').click()
    cy.get('body').should('contain', 'Email is not valid')
  });
})