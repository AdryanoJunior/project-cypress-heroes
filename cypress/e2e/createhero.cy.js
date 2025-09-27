describe('Criar Herói - Casos de Teste ', () => {

    beforeEach(() => {
        cy.login('admin@test.com', 'test123')
    });

    it('Deve criar um herói com sucesso', () => {
        cy.get("[href='/heroes/new']").click()
        cy.get('[data-cy="nameInput"]').type('HeroTest')
        cy.get('[data-cy="priceInput"]').type('1997')
        cy.get('[data-cy="fansInput"]').type('500')
        cy.get('[data-cy="savesInput"]').type('35')
        cy.get('[data-cy="powersSelect"]').select('Invisibility')
        cy.get('button').eq(2).click()
    });

    it('Deve aparecer as mensagens de erro ao tentar criar herói com todos os campos em brancos', () => {
         cy.get("[href='/heroes/new']").click()
         cy.get('button').eq(2).click()
         cy.get('body').should('contain', 'Name is required')
         cy.get('body').should('contain', 'Price is required')
         cy.get('body').should('contain', 'Fans is required')
         cy.get('body').should('contain', 'Saves is required')
         cy.get('body').should('contain', 'Powers is required')
    });
});