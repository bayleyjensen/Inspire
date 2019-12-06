import store from "../store.js";

// @ts-ignore
const _imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

// // @ts-ignore
// const _sandbox = axios.create({
//   baseURL: "//bcw-sandbox.herokuapp.com/api/bayley/images", // is this necessary?
//   timeout: 8000
// });
//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  async getImageAsync() {
    let res = await _imgApi.get("");
    store.commit("image", new Image(res.data));
    console.log("this is my background imgage", res);
  }
}

const imageService = new ImageService();
export default imageService;
