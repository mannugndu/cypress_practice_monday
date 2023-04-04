Cypress.Commands.add("waitfor", (sec)=>{
    cy.log(`Waiting for ${sec} seconds`)
    cy.wait(sec*1000)
})

