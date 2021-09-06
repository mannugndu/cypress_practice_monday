/// <reference types="cypress" />
import AllTodoPage from "../../pages/allTodoPage";

describe("ToDo HomePage Tests - All Todos", () => {
  const allTodoPage = new AllTodoPage();
  const todos = ["Pay electric bill", "Walk the dog"];

  beforeEach(() => {
    allTodoPage.visit();
  });

  it("Should display 2 todos by default", () => {
    allTodoPage.assertNumberOfTodos(2).assertTodos(todos);
  });

  it("Should be able to add todo", () => {
    const newTodo = "Feed the cat";
    const newTodoList = [...todos, newTodo];

    allTodoPage
      .addNewTodo(newTodo)
      .assertNumberOfTodos(3)
      .assertTodos(newTodoList);
  });

  it("Should be able to mark the todo items as completed", () => {
    const targetTodo = todos[0];

    allTodoPage
      .markTodoAsCompleted(targetTodo)
      .assertTodoIsCompleted(targetTodo);
  });
});
