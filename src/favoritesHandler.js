export const toggleFavoriteIcon = (isFavorite, el) => {
  el.classList.toggle("fa", isFavorite);
  el.classList.toggle("far", !isFavorite);
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
  // favoriteCards.forEach((card) => {
  //   if (card.textContent.includes(quote)) {
  //     card.remove();
  //   }
  // });

  favoriteCards.forEach(processFavoriteCard);
};
