describe('Тест на авторизацию', function () {

    beforeEach('Заход на сайт', function () {
        cy.visit('/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
    })

    afterEach('Конец теста', function () {
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    it('Успешный логин/пароль', function () {
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('qa_one_love1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
     }) 
    
     it('Невалидный логин', function () {
         cy.get('#mail').type('aaaaaaaaaaaa');
         cy.get('#pass').type('qa_one_love1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    })
    it('Неверный пароль', function () {
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('qa_4o3e2lo624ve1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
    })
    it('Неверный логин', function () {
         cy.get('#mail').type('gojko@mitic.yg');
         cy.get('#pass').type('qa_one_love1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains('Такого логина или пароля нет');
    })
    it('Восстановление пароля', function () {
        cy.get('#forgotEmailButton').click();
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible');
        cy.get('#forgotForm > .header').should('be.visible');
        cy.get('#forgotForm > .header').contains('Восстановите пароль');
        cy.get('#mailForgot').type('gojko@mitic.yg');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail')
    })
    it('Проверка строчных/заглавных букв', function (){
        cy.get('#mail').type('geRmAn@dolNikov.ru');
        cy.get('#pass').type('qa_one_love1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
    })
})