import quotes from "./quote.js";

const quoteElement = document.getElementById("quote");
const quoteِAuthorElement = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");

const generateRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  // const quote = randomQuote.quote;
  // const quoteAuthor = randomQuote.author;

  const { quote, author } = randomQuote;

  // const quote = `<em>"${randomQuote.quote}"</em> <br> <p id=author>${randomQuote.author}</p>`;

  quoteElement.textContent = quote;
  quoteِAuthorElement.textContent = author;
};

generateBtn.addEventListener("click", generateRandomQuote);
