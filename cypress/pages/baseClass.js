class BasePage {
  static get basicLocators() {
    return { todoItems: ".todo-list li" };
  }
  constructor() {
    this.basicLocators = BasePage.basicLocators;
  }

  getTodoItems() {
    return cy.get(this.basicLocators.todoItems);
  }

  assertNumberOfTodos(number) {
    this.getTodoItems().should("have.length", number);

    return this;
  }

  assertTodos(todos) {
    todos.forEach((todo) => {
      this.getTodoItems().contains(todo).should("exist").and("be.visible");
    });

    return this;
  }
}

export default BasePage;
