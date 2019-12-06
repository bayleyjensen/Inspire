import QuoteService from "../services/quote-service.js";
import store from "../store.js";
import quoteService from "../services/quote-service.js";

function _drawQuote() {
  let template = "";
  let quote = store.State.quote;
  document.getElementById("quote").innerHTML = quote.Template;
}

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)
export default class QuoteController {
  constructor() {
    console.log("howdy from Quote controller");
    store.subscribe("quote", _drawQuote);
    quoteService.getQuoteAsync();
  }

  async getQuoteAsync() {
    try {
      await quoteService.getQuoteAsync();
    } catch (error) {
      console.error(error);
    }
  }
}
