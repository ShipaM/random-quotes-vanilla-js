import quotes from "./src/quote.js";
import {
  toggleFavoriteIcon,
  showFavoriteCard,
  hideFavoriteCard,
} from "./src/favoritesHandler.js";

const quoteElement = document.getElementById("quote");
const quoteِAuthorElement = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");
const toggleFavoriteBtn = document.getElementById("toggle-favorite-btn");
const favoritesContainer = document.getElementById("favorites-container");

let currentQuoteIndex;

const generateRandomQuote = () => {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);

  const currentQuote = quotes[currentQuoteIndex];
  // const quote = currentQuote.quote;
  // const quoteAuthor = currentQuote.author;

  const { quote, author } = currentQuote;

  quoteElement.textContent = quote;
  quoteِAuthorElement.textContent = author;

  // if (currentQuote.isFavorite) {
  //   toggleFavoriteBtn.classList.add("fa");
  //   toggleFavoriteBtn.classList.remove("far");
  // } else {
  //   toggleFavoriteBtn.classList.remove("fa");
  //   toggleFavoriteBtn.classList.add("far");
  // }
  // toggleFavoriteBtn.classList.toggle("fa", currentQuote.isFavorite);
  // toggleFavoriteBtn.classList.toggle("far", !currentQuote.isFavorite);

  toggleFavoriteIcon(currentQuote.isFavorite, toggleFavoriteBtn);

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
