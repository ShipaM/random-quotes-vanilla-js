import quotes from "./quote.js";

const quoteElement = document.getElementById("quote");
const quoteِAuthorElement = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");
const toggleFavoriteBtn = document.getElementById("toggle-favorite-btn");
const favoritesContainer = document.getElementById("favorites-container");

let currentQuoteIndex;

const generateRandomQuote = () => {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  console.log(currentQuoteIndex);

  const currentQuote = quotes[currentQuoteIndex];
  // const quote = currentQuote.quote;
  // const quoteAuthor = currentQuote.author;

  const { quote, author } = currentQuote;

  quoteElement.textContent = quote;
  quoteِAuthorElement.textContent = author;

  toggleFavoriteBtn.textContent = currentQuote.isFavorite
    ? "Remove from favorites"
    : "Add to favorites";

  toggleFavoriteBtn.style.display = "inline-block";
};

const toggleFavorite = () => {
  console.log(currentQuoteIndex);
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote?.isFavorite;
  toggleFavoriteBtn.textContent = currentQuote.isFavorite
    ? "Remove from favorites"
    : "Add to favorites";
  console.log(quotes);

  if (currentQuote.isFavorite) {
    const favoriteCard = document.createElement("div");
    favoriteCard.classList.add("favorite-card");
    favoriteCard.innerHTML = `<p>${currentQuote.quote}</p>
    <p>${currentQuote.author}</p>`;
    favoritesContainer.appendChild(favoriteCard);
  } else {
    // Remove favorite card if quote is un favorited
    const favoriteCards = document.querySelectorAll(".favorite-card");
    favoriteCards.forEach((card) => {
      if (card.textContent.includes(currentQuote.quote)) {
        card.remove();
      }
    });
  }
};

generateBtn.addEventListener("click", generateRandomQuote);
toggleFavoriteBtn.addEventListener("click", toggleFavorite);

// generateRandomQuote();
