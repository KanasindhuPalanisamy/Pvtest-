/// <reference types="cypress"/>

it('pv test',function(){
    cy.visit("http://localhost:3000");
    cy.get('.signin-logo-img');
    // cy.get('amplify-sign-in.hydrated').find('#username').type("admin_pirates@pointsville.com")
    //cy.get('amplify-sign-in.hydrated').find("#password").type("Password@123")
    cy.get('.button').click()
    })
