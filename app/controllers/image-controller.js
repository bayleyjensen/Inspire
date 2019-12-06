import ImageService from "../services/image-service.js";

import Image from "../models/image.js";

import store from "../store.js";
import imageService from "../services/image-service.js";

//private
function _drawImage() {
  let template = store.State.image.URL;
  document.body.style.backgroundImage = ` url('${template}')`;
}

//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image)
export default class ImageController {
  constructor() {
    console.log("hello from Image controller");
    store.subscribe("image", _drawImage);
    imageService.getImageAsync();
  }
}
