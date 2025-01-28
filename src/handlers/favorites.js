import { favoriteBtn } from "../../index.js";

export const toggleFavoriteBtnIcon = (isFavorite, el) => {
  el.classList.toggle("fa", isFavorite);
  el.classList.toggle("far", !isFavorite);
};

export const showFavoriteBtn = (btn) => {
  btn.style.display = "inline-block";
};

export const hideFavoriteBtn = (btn) => {
  btn.style.display = "none";
};

export const handleFavorite = (isFavorite) => {
  showFavoriteBtn(favoriteBtn);
  toggleFavoriteBtnIcon(isFavorite, favoriteBtn);
};

export const toggleFavorite = (quote, btn, container) => {
  quote.isFavorite = !quote?.isFavorite;
  const { text, author, isFavorite } = quote;
  toggleFavoriteBtnIcon(isFavorite, btn);

  if (isFavorite) {
    showFavoriteCard(text, author, container);
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
