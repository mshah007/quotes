function newQuote() {
  let num = Math.floor(Math.random() * localQuote.length);
  const quote = localQuote[num];
  return quote;
}

let quoteText = document.querySelector('#quote');
let quoteAuthor = document.querySelector('#author');
let tweetButton = document.querySelector('#twitter');
let quoteButton = document.querySelector('#new-qoute');

function printQuote() {
  let q = newQuote();
  quoteText.textContent = q.text;
  quoteAuthor.textContent = q.author;
}

quoteButton.addEventListener('click', printQuote);
tweetButton.addEventListener('click', () => {
  const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
  window.open(twitterURL, '_blank');
});
