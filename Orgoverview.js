export class Orgoverview{
    direct(){
    cy.get('.padd-left8', { timeout: 20000 })
    cy.get(':nth-child(1) > .MuiPaper-root > :nth-child(2) > .MuiGrid-root > .MuiButtonBase-root').click() //org-overview
    cy.get('.active-org > .MuiPaper-root > .org-container > :nth-child(1) > .org-body-content > .org-title-container > .align-right > .general-icon').click().wait(1000) //7springs-edit
    cy.get('.MuiDialogActions-root > :nth-child(2)').click().wait(1000) // edit-org-cancel
    cy.get('.btn').click().wait(1000) //add-org-button
    cy.get('.MuiGrid-grid-sm-4 > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type("7Springs") //organization-name
    cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type("APPI123")
    // cy.get('.btn-secondary') //add-org cancel
}
}
