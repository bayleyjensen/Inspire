import store from "../store.js";
import Todo from "../models/todos.js";
// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/bayley/todos/",
  timeout: 9000
});

class TodoService {
  //FIXME fix getTodos
  async getTodosAsync() {
    console.log("Getting the Todo List");
    let res = await todoApi.get();
    store.commit(
      "todos",
      res.data.data.map(t => new Todo(t))
    );
    console.log("THIS BE WHAT IM LOOKING FOR", res);
  }
  // TODO Handle this response from the server

  async addTodoAsync(newTodo) {
    let res = await todoApi.post("", newTodo);
    console.log("from add async", res);
    //TODO Handle this response from the server (hint: what data comes back, do you want this?)
  }

  async toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    let res = await todoApi.put(todoId, todo);
    //TODO do you care about this data? or should you go get something else?
  }

  async removeTodoAsync(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
  }
}

const todoService = new TodoService();
export default todoService;
