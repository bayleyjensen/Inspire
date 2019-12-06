import ImageService from "../services/image-service.js";

import Image from "../models/image.js";

import store from "../store.js";
import imageService from "../services/image-service.js";

//private
function _drawImage() {
  let image = store.State.image;
  document.getElementById("bg-image").style.background = "${this.URL}";
}

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
export default class ImageController {
  constructor() {
    console.log("hello from Image controller");
    imageService.getImageAsync();
    store.subscribe("image", _drawImage);
  }
}
