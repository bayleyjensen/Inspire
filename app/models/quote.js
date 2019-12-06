export default class Quote {
  constructor(data) {
    this.body = data.body;
    this.author = data.author;
  }

  get Template() {
    return /*html*/ `
  <div>
  <h3>${this.body}</h3>
  <h5>${this.author}</h5>
  </div>`;
  }
}
