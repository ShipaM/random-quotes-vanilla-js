import { handleFavorite } from "./favorites.js";
import { generateRandomInt } from "../utils.js";

let currentQuoteIndex;

const handleQuote = (quotes, setCurrentQuote) => {
  console.log(quotes);
  const randomQuote = choseRandomQuote(quotes);
  setCurrentQuote(randomQuote);
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

export { handleQuote };
