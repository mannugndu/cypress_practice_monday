
import './commands'
import addContext from "mochawesome/addContext";

Cypress.on("test:after:run", (test, runnable) => {
    if (test.state === "failed") {
        const screenshot = `assets/${Cypress.spec.name}/${test.title} (failed).png`;
        addContext({ test }, screenshot);
    }
});