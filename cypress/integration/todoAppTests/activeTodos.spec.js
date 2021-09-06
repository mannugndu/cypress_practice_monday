/// <reference types="cypress" />

import ActiveTodosPage from "../../pages/activeTodoPage";

describe("ToDo HomePage Tests - All Todos", () => {
  const activeTodosPage = new ActiveTodosPage();
  const todos = [
    { title: "Pay electric bill", completed: true, id: 1 },
    { title: "Walk the dog", completed: false, id: 2 },
    { title: "Go to Market", completed: true, id: 3 },
    { title: "Call to mom", completed: false, id: 4 },
    { title: "Sleep", completed: false, id: 5 },
  ];

  beforeEach(() => {
    window.localStorage.setItem("todos-vanillajs", JSON.stringify(todos));
    activeTodosPage.visit();
  });

  it("Should display all active todos", () => {
    const activeTodo = todos
      .filter((todo) => !todo.completed)
      .map((todo) => todo.title);

    activeTodosPage
      .assertNumberOfTodos(activeTodo.length)
      .assertTodos(activeTodo);
  });
});
