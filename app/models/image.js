export default class Image {
  constructor(data) {
    this.URL = data.large_url || data.URL;
  }

  get Template() {
    return /*html*/ `
    `;
  }
}
