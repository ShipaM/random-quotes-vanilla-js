import { currentQuote } from "../../index.js";

const toggleBtn = document.getElementById("toggle-favorite-btn");
const favoritesContainer = document.getElementById("favorites-container");

export const toggleFavoriteIcon = (isFavorite, el) => {
  el.classList.toggle("fa", isFavorite);
  el.classList.toggle("far", !isFavorite);
};

export const showBtn = (btn) => {
  btn.style.display = "inline-block";
};

export const hideBtn = (btn) => {
  btn.style.display = "none";
};

hideBtn(toggleBtn);

export const handleFavorite = (isFavorite) => {
  showBtn(toggleBtn);
  toggleFavoriteIcon(isFavorite, toggleBtn);
};

const toggleFavorite = () => {
  currentQuote.isFavorite = !currentQuote?.isFavorite;

  toggleFavoriteIcon(currentQuote.isFavorite, toggleBtn);

  if (currentQuote.isFavorite) {
    showFavoriteCard(
      currentQuote.text,
      currentQuote.author,
      favoritesContainer
    );
  } else {
    hideFavoriteCard(currentQuote.text);
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

toggleBtn.addEventListener("click", toggleFavorite);
