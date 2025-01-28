import { handleQuote } from "./src/handlers/quote.js";
import quotes from "./src/data/quotes.js";
import { toggleFavorite, hideFavoriteBtn } from "./src/handlers/favorites.js";

const generateBtn = document.getElementById("generate-btn");
const favoritesContainer = document.getElementById("favorites-container");
const favoriteBtn = document.getElementById("favorite-btn");

let currentQuote = null;

hideFavoriteBtn(favoriteBtn);

const setCurrentQuote = (quote) => {
  currentQuote = quote;
};

generateBtn.addEventListener("click", () =>
  handleQuote(quotes, setCurrentQuote)
);

favoriteBtn.addEventListener("click", () =>
  toggleFavorite(currentQuote, favoriteBtn, favoritesContainer)
);

export { favoriteBtn };
