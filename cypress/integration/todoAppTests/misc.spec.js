it("Explains the use of fixtures", () => {
    cy.visit("/")
    cy.fixture("example.json").then((data) => {
        cy.log(data)
        console.log(data)
    })
})

it("Demostrates screenshots on failure and record videos, including plugion [Cypress-log-to-output]",()=>{
    cy.visit("/");
    cy.waitfor(2);
    console.error("There is some error during running the tests"); // works with chrome
    cy.log("Clicking on invalid locator...");
    cy.get("invalid locator").click();
})
