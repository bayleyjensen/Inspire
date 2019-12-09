export default class Todo {
  constructor(data) {
    this.id = data._id;
    this.completed = data.completed;
    this.users = data.users;
    this.description = data.description;
  }

  get Template() {
    if (this.completed) {
      return /*html*/ `
    <ul>
    <li id="todoStyle"><s>${this.description}</s></li><input type="checkbox" onclick="app.todoController.toggleTodoStatus('${this.id}')"class="form-check-input" id="completed">
    <span></span>
    <button type="button" onclick="app.todoController.removeTodoAsync('${this.id}')">bye bye</button>
    </ul>
    `;
    } else
      return /*html*/ `
  <ul>
  <li ></li>${this.description}</li><input type="checkbox" onclick="app.todoController.toggleTodoStatus('${this.id}')"class="form-check-input" id="completed"><button type="button" onclick="app.todoController.removeTodoAsync('${this.id}')">bye bye</button>
  </ul>
  `;
  }
}
