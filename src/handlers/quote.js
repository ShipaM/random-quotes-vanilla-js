import { handleFavorite } from "./favorites.js";
import { generateRandomInt } from "../utils.js";
import quotes from "../data/quotes.js";

let currentQuoteIndex;
let currentQuote = null;

const handleQuote = () => {
  const randomQuote = choseRandomQuote(quotes);
  currentQuote = randomQuote;
  displayQuote(randomQuote);
};

const displayQuote = (quote) => {
  const { text, author, isFavorite } = quote;
  const quoteElement = document.getElementById("quote");
  const quoteAuthorElement = document.getElementById("quote-author");

  quoteElement.textContent = text;
  quoteAuthorElement.textContent = author;
  handleFavorite(isFavorite);
};

const choseRandomQuote = (quotes) => {
  const randomIndex = generateRandomInt(quotes.length);
  currentQuoteIndex = randomIndex;
  return quotes[randomIndex];
};

export { displayQuote, currentQuote, choseRandomQuote, handleQuote };
