import store from "../store.js";
import Image from "../models/image.js";

// @ts-ignore
const _imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  async getImageAsync() {
    return await _imgApi.get("").then(res => {
      let results = new Image(res.data);
      console.log("this is from sandbox", res.data);
      store.commit("image", results);
      console.log("this is my background image in store", store.State.image);
    });
  }
}

const imageService = new ImageService();
export default imageService;
