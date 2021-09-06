import BasePage from "./baseClass";

class ActiveTodosPage extends BasePage {
  constructor() {
    super();
    this.locators = {};
    this.url = "/todo#/active";
  }

  visit() {
    cy.visit(this.url);
  }
}

export default ActiveTodosPage;
