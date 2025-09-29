describe('Покемоны е2е тест', function () {

    it('е2е', function () {
    cy.visit('https://pokemonbattle.ru/login');
    cy.get('#k_email').type('USER_LOGIN');
    cy.get('#k_password').type('USER_PASSWORD');
    cy.get('.MuiButton-root').click();
    cy.get('.header_card_trainer').click();
    cy.get('[data-qa="shop"]').click();
    cy.get('.available > button').first().click();
    cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4111 1111 1111 1111');
    cy.get(':nth-child(1) > .style_1_base_input').type('1234');
    cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125');
    cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('Gojko Mitic');
    cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
    cy.get('.style_1_base_input').type('56456');
    cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
    })
})