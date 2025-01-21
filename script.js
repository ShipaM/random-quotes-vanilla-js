const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
];

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
