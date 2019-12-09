import TodoService from "../services/todo-service.js";
import store from "../store.js";
import todoService from "../services/todo-service.js";
import Todos from "../models/todos.js";

//TODO Create the render function
function _drawTodos() {
  let todos = store.State.todos;
  let template = "";
  todos.forEach(t => (template += t.Template));
  document.getElementById("todos").innerHTML = template;
  let activeTodo = store.State.todos.length;
  document.getElementById("todo-number").innerHTML = `${activeTodo}`;
}
//TODO //make template and model //

export default class TodoController {
  constructor() {
    store.subscribe("todos", _drawTodos);
    TodoService.getTodosAsync();
  }

  async getTodosAsync() {
    try {
      await todoService.getTodosAsync();
    } catch (error) {
      console.error(error);
    }
  }

  async addTodoAsync(event) {
    event.preventDefault();
    let formData = event.target;
    let newTodo = {
      description: formData.description.value
    };
    try {
      await TodoService.addTodoAsync(newTodo);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  async toggleTodoStatus(todoId) {
    try {
      await TodoService.toggleTodoStatusAsync(todoId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  async removeTodoAsync(todoId) {
    try {
      await TodoService.removeTodoAsync(todoId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }
}
