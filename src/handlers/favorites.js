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
  toggleFavoriteBtnIcon(quote.isFavorite, btn);

  if (quote.isFavorite) {
    showFavoriteCard(quote, container);
  } else {
    hideFavoriteCard(quote.id);
  }
};

export const showFavoriteCard = (quote, container) => {
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");
  favoriteCard.dataset.quoteId = quote.id;
  favoriteCard.innerHTML = `
    <p>${quote.text}</p>
    <p>${quote.author}</p>`;
  container.appendChild(favoriteCard);
};

export const hideFavoriteCard = (id) => {
  const card = document.querySelector(`.favorite-card[data-quote-id="${id}"]`);
  // if (card) card.remove();
  card && card.remove();
};
