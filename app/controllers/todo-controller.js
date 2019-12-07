import TodoService from "../services/todo-service.js";
import store from "../store.js";
import todoService from "../services/todo-service.js";
import Todos from "../models/todos.js";

//TODO Create the render function
function _drawTodos() {
  let todos = store.State.todos;
  document.getElementById("todos").innerHTML = todos.Template;
}
//TODO //make template and model //

export default class TodoController {
  constructor() {
    console.log("Hola from the Todo controller");
    store.subscribe("todos", _drawTodos);
    //TODO Remember to register your subscribers
    TodoService.getTodosAsync();
  }

  async getTodosAsync() {
    try {
      await todoService.getTodosAsync();
    } catch (error) {
      console.error(error);
    }
  }

  async addTodoAsync(e) {
    debugger;
    e.preventDefault();
    var form = e.target;
    var todo = {
      //TODO build the todo object from the data that comes into this method
    };
    try {
      await TodoService.addTodoAsync(todo);
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
  async removeTodo(todoId) {
    try {
      await TodoService.removeTodoAsync(todoId);
    } catch (error) {
      debugger;
      console.error("[ERROR]:", error);
    }
  }
}
