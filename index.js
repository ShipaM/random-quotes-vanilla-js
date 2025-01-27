import { handleQuote } from "./src/handlers/quote.js";
import quotes from "./src/data/quotes.js";

const generateBtn = document.getElementById("generate-btn");

let currentQuote = null;

const setCurrentQuote = (quote) => {
  currentQuote = quote;
};

generateBtn.addEventListener("click", () =>
  handleQuote(quotes, setCurrentQuote)
);

export { currentQuote };
