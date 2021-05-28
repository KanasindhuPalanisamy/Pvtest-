/// <reference types="cypress"/>

// it('pv test',function(){
//     cy.visit("https://google.com");
//     cy.get('.gLFyf',{timeout:6000}).type('Automation Step by Step{enter}')
//     // cy.get(':nth-child(3) > :nth-child(1) > .usJj9c > .r > .l').click()
//     // cy.get('.signin-logo-img');
//     // // cy.get('amplify-sign-in.hydrated').find('#username').type("admin_pirates@pointsville.com")
//     // //cy.get('amplify-sign-in.hydrated').find("#password").type("Password@123")
//     // cy.get('.button').click()
//     })


// describe('Newtours',function(){
//     it('verify the newtourdemo',function(){
//         cy.visit("http://demo.guru99.com/test/newtours/") //visit url
//         cy.url().should('include','newtours')  //verify if newtour is present
//         cy.get('input[name=userName]').should('be.visible').should('be.enabled').type("sindhu")
//         cy.get('input[name=password]').should('be.visible').should('be.enabled').type("sindhu")
//         cy.get('input[name=submit]').should('be.visible').click()  //sign-in
//         cy.get(':nth-child(2) > [width="80"] > a').click()

//         //radio
//         cy.get('input[value=roundtrip]').should('be.visible').should('be.checked')
//         cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click()

//         cy.get('[name=findFlights]').should('be.visible').click()
//     })
// })


export class MainPage{
navigate(){
      cy.visit('http://localhost:3000');
      cy.get('amplify-authenticator')
        .shadow()
        .get('amplify-sign-in')
        .shadow()
        .find('amplify-form-section')
        .find('amplify-auth-fields')
        .shadow()
        .as('amplifyAuthFields');
  
        cy.get('amplify-authenticator')
        .shadow()
        .get('amplify-sign-in')
        .shadow()
        .find('amplify-form-section')
        .find('amplify-button')
        .shadow()
        .as('amplifyButton');
  
  
      cy.get('@amplifyAuthFields')
        .find('amplify-username-field')
        .shadow()
        .find('amplify-form-field')
        .shadow()
        .find('input#username')
        .type('admin@pointsville.com');
  
      cy.get('@amplifyAuthFields')
        .find('amplify-password-field')
        .shadow()
        .find('amplify-form-field')
        .shadow()
        .find('input#password')
        .type('Password123');
  
      cy.get('@amplifyButton')
        .find('button')
        .click({force: true});
}
}

  
