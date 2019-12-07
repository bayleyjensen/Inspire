export default class Todo {
  constructor(data) {
    this.id = data._id;
    this.completed = data.completed;
    this.users = data.users;
    this.description = data.descrition;
  }

  get Template() {
    return /*html*/ `
    <div id="todos">${this.description}</div>`;
  }
}
