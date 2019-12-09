import store from "../store.js";
import Todo from "../models/todos.js";
// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/bayley/todos/",
  timeout: 9000
});

class TodoService {
  // fix getTodos
  constructor() {}
  async getTodosAsync() {
    let res = await todoApi.get();
    let todos = res.data.data.map(t => new Todo(t));
    store.commit("todos", todos);
    console.log("THIS IS MY TOD0 LIST", todos);
  }
  // TODO Handle this response from the server

  async addTodoAsync(newTodo) {
    let res = await todoApi.post("", newTodo);
    console.log("from add async service", res);
    this.getTodosAsync();
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  async toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo.id == todoId);
    console.log("TOGGLE", todo);
    if (todo.completed) {
      todo.completed = false;
    } else todo.completed = true;
    let result = await todoApi.put(todoId, todo);
    this.getTodosAsync();
    console.log("what is in put", result);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    let res = await todoApi.put(todoId, todo);
    //TODO do you care about this data? or should you go get something else?
  }

  async removeTodoAsync(todoId) {
    let res = await todoApi.delete(todoId);
    console.log("from remove service", res);
    store.commit("todos", res);
    this.getTodosAsync();
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
  }
}

const todoService = new TodoService();
export default todoService;
