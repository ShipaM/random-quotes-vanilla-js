import quotes from "./src/quote.js";
import {
  toggleFavoriteIcon,
  showFavoriteCard,
  hideFavoriteCard,
} from "./src/favoritesHandler.js";
import { generateRandomInt } from "./src/utils.js";

const quoteElement = document.getElementById("quote");
const quoteِAuthorElement = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");
const toggleFavoriteBtn = document.getElementById("toggle-favorite-btn");
const favoritesContainer = document.getElementById("favorites-container");

let currentQuoteIndex;

const generateRandomQuote = () => {
  const randomIndex = generateRandomInt(quotes.length);
  const { quote, author, isFavorite } = quotes[randomIndex];

  currentQuoteIndex = randomIndex;

  quoteElement.textContent = quote;
  quoteِAuthorElement.textContent = author;

  toggleFavoriteIcon(isFavorite, toggleFavoriteBtn);

  toggleFavoriteBtn.style.display = "inline-block";
};

const toggleFavorite = () => {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote?.isFavorite;

  toggleFavoriteIcon(currentQuote.isFavorite, toggleFavoriteBtn);

  if (currentQuote.isFavorite) {
    showFavoriteCard(
      currentQuote.quote,
      currentQuote.author,
      favoritesContainer
    );
  } else {
    hideFavoriteCard(currentQuote.quote);
  }
};

generateBtn.addEventListener("click", generateRandomQuote);
toggleFavoriteBtn.addEventListener("click", toggleFavorite);

generateRandomQuote();
