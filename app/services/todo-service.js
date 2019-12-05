import store from "../store.js";

//NOTE your service is all set up for the observer pattern but there is still work to be done

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/YOURNAME/todos/",
  timeout: 3000
});

class TodoService {
  getTodos() {
    console.log("Getting the Todo List");
    todoApi
      .get()
      .then(res => {
        //TODO Handle this response from the server
      })
      .catch(err => store.commit("error", err.response.data));
  }

  addTodo(todo) {
    todoApi
      .post("", todo)
      .then(res => {
        //TODO Handle this response from the server (hint: what data comes back, do you want this?)
      })
      .catch(err => store.commit("error", err.response.data));
  }

  toggleTodoStatus(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    todoApi
      .put(todoId, todo)
      .then(res => {
        //TODO do you care about this data? or should you go get something else?
      })
      .catch(err => store.commit("error", err.response.data));
  }

  removeTodo(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
  }
}

const todoService = new TodoService();
export default todoService;
