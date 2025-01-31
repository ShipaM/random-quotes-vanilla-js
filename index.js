import { handleQuote } from "./src/handlers/quote.js";
import quotes from "./src/data/quotes.js";
import { toggleFavorite, hideFavoriteBtn } from "./src/handlers/favorites.js";

const generateBtn = document.getElementById("generate-btn");
const favoritesContainer = document.getElementById("favorites-container");
const quoteFavoriteBtn = document.getElementById("quote-favorite-btn");

let currentQuote = null;

hideFavoriteBtn();

const setCurrentQuote = (quote) => {
  currentQuote = quote;
};

generateBtn.addEventListener("click", () =>
  handleQuote(quotes, setCurrentQuote)
);

quoteFavoriteBtn.addEventListener("click", () =>
  toggleFavorite(currentQuote, quoteFavoriteBtn, favoritesContainer)
);

export { quoteFavoriteBtn };
