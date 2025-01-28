import { currentQuote } from "../../index.js";

const favoriteBtn = document.getElementById("favorite-btn");
const favoritesContainer = document.getElementById("favorites-container");

export const toggleFavoriteBtnIcon = (isFavorite, el) => {
  el.classList.toggle("fa", isFavorite);
  el.classList.toggle("far", !isFavorite);
};

export const showBtn = (btn) => {
  btn.style.display = "inline-block";
};

export const hideBtn = (btn) => {
  btn.style.display = "none";
};

hideBtn(favoriteBtn);

export const handleFavorite = (isFavorite) => {
  showBtn(favoriteBtn);
  toggleFavoriteBtnIcon(isFavorite, favoriteBtn);
};

const toggleFavorite = (quote) => {
  quote.isFavorite = !quote?.isFavorite;
  const { text, author, isFavorite } = quote;
  toggleFavoriteBtnIcon(isFavorite, favoriteBtn);

  if (isFavorite) {
    showFavoriteCard(text, author, favoritesContainer);
  } else {
    hideFavoriteCard(text);
  }
};

export const showFavoriteCard = (quote, author, container) => {
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");
  favoriteCard.innerHTML = `<p>${quote}</p>
    <p>${author}</p>`;
  container.appendChild(favoriteCard);
};

export const hideFavoriteCard = (quote) => {
  const favoriteCards = document.querySelectorAll(".favorite-card");

  const processFavoriteCard = (card) => {
    if (card.textContent.includes(quote)) {
      card.remove();
    }
  };
  favoriteCards.forEach(processFavoriteCard);
};

favoriteBtn.addEventListener("click", () => toggleFavorite(currentQuote));
