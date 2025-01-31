import { handleFavorite } from "./favorites.js";
import { generateRandomInt } from "../utils.js";

let currentQuoteIndex;

const handleQuote = (quotes, setCurrentQuote) => {
  const randomQuote = choseRandomQuote(quotes);
  setCurrentQuote(randomQuote);
  displayQuote(randomQuote);
};

const displayQuote = (quote) => {
  const { text, author, isFavorite, id } = quote;
  const quoteElement = document.getElementById("quote");
  const quoteTextElement = document.getElementById("quote-text");
  const quoteAuthorElement = document.getElementById("quote-author");
  //Current quote will have data-current-quote-id HTML attribute
  quoteElement.dataset.currentQuoteId = id;
  quoteTextElement.textContent = text;
  quoteAuthorElement.textContent = author;
  handleFavorite(isFavorite);
};

const choseRandomQuote = (quotes) => {
  const randomIndex = generateRandomInt(quotes.length);
  currentQuoteIndex = randomIndex;
  return quotes[randomIndex];
};

export { handleQuote };
