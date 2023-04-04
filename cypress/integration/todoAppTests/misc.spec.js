it("Explains the use of fixtures", () => {
    cy.visit("/")
    cy.fixture("example.json").then((data) => {
        cy.log(data)
        console.log(data)
    })
})

it.only("Demostrates screenshots on failure and record videos, including plugion [Cypress-log-to-output]",()=>{
    cy.visit("/");
    //cy.waitfor(2);
    cy.log("After wait")
    console.error("There is some error during running the tests"); // works with chrome
    cy.get("invalid locator").click();
})
