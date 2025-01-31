import { quoteFavoriteBtn } from "../../index.js";

export const toggleFavoriteBtnIcon = (isFavorite) => {
  quoteFavoriteBtn.classList.toggle("fa", isFavorite);
  quoteFavoriteBtn.classList.toggle("far", !isFavorite);
};

export const showFavoriteBtn = () => {
  quoteFavoriteBtn.style.display = "inline-block";
};

export const hideFavoriteBtn = () => {
  quoteFavoriteBtn.style.display = "none";
};

export const handleFavorite = (isFavorite) => {
  showFavoriteBtn();
  toggleFavoriteBtnIcon(isFavorite);
};

export const toggleFavorite = (quote, btn, container) => {
  quote.isFavorite = !quote?.isFavorite;
  toggleFavoriteBtnIcon(quote.isFavorite, btn);

  if (quote.isFavorite) {
    showFavoriteCard(quote, container);
  } else {
    removeFavoriteCard(quote.id);
  }
};

const removeFavoriteQuote = (quote) => {
  quote.isFavorite = false;
  removeFavoriteCard(quote.id);
  const currentQuote = document.querySelector("[data-current-quote-id]");
  const currentQuoteId = currentQuote.dataset.currentQuoteId;
  if (quote.id === currentQuoteId) {
    toggleFavoriteBtnIcon(quote.isFavorite);
  }
};

export const showFavoriteCard = (quote, container) => {
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");
  //Each favorite quote will have data-favorite-quote-id HTML attribute
  favoriteCard.dataset.favoriteQuoteId = quote.id;
  favoriteCard.innerHTML = `
    <div class="favorite-card-content">
      <p>${quote.text}</p>
      <p class="favorite-card-author">${quote.author}</p>
    </div>
    <button class="btn btn-danger "><i class="far fa-trash-alt"></i>Remove from favorite</button>`;
  container.appendChild(favoriteCard);

  const removeBtn = favoriteCard.querySelector(".btn-danger");
  removeBtn.addEventListener("click", () => removeFavoriteQuote(quote));
};

export const removeFavoriteCard = (id) => {
  const card = document.querySelector(
    `.favorite-card[data-favorite-quote-id="${id}"]`
  );
  // if (card) card.remove();
  card && card.remove();
};
