import store from "../store.js";

// @ts-ignore
const _quoteApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/quotes",
  timeout: 9000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class QuoteService {
  async getQuoteAsync() {
    console.log("getquote service");
    let res = await _quoteApi.get("");
    console.log("This is my quote", res);
    store.commit("quote", res.data);
  }
}

const quoteService = new QuoteService();
export default quoteService;
