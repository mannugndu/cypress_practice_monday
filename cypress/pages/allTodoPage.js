import BasePage from "./baseClass";

class AllTodoPage extends BasePage {
  constructor() {
    super();
    this.locators = {
      todoInputBox: " [data-test=new-todo]",
      todoCheckBox: "input[type=checkbox]",
    };
    this.url = "/todo";
  }

  addNewTodo(todo) {
    cy.get(this.locators.todoInputBox).type(`${todo}{enter}`);

    return this;
  }

  markTodoAsCompleted(todo) {
    this.getTodoItems()
      .contains(todo)
      .parent()
      .find(this.locators.todoCheckBox)
      .check();

    return this;
  }

  assertTodoIsCompleted(todo) {
    this.getTodoItems()
      .contains(todo)
      .parents("li")
      .should("have.class", "completed");

    return this;
  }

  visit() {
    cy.visit(this.url);

    return this;
  }
}

export default AllTodoPage;
