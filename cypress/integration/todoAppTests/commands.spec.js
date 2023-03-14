const activity = 'Get Some Rest'
beforeEach(() => {
    cy.intercept("https://www.boredapi.com/api/activity", { activity });
    cy.visit("http://127.0.0.1:8080");
})

it("Demonstrate within command", () => {

    cy.get('li').eq(1).within(() => {
        cy.get('button') // will return only 2 buttons
    })

    cy.get('button'); // will return all buttons
})

it("Demonstrate the wrap command", () => { // to continue using cy commands
    cy.get('li').each(($ele) => {
        cy.wrap($ele).find('button').first().click();
    })

    cy.get('ul').children('li').each(($ele) => {
        cy.wrap($ele).find('button').first().click();
    })
})

it("Demo of then block", () => {
    cy.get('li')
        .first()
        .find("p")
        .invoke('text')
        .then((txt) => {
            console.log(txt)
        })
})

it("Demo of parent, parents, parentsUntil, siblings", () => {
    cy.get('button').first().parent(); // moves one step up

    cy.get('button').first().parents('ul'); // moves multiple steps up based on the selector, in case no selector is given, it returns all the parents

    cy.get('button').first().parentsUntil("body"); // returns all parenst until the specified grand parent selector

    cy.get('button').first().siblings(); // Get the parent and return all the children but does not include the target element
})

it("Demo for request command", () => {
    cy.get('#activity').should("have.text",activity)
})