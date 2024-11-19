async function fetchQuote() {
  const quoteElement = document.querySelector('.quote');
  const authorElement = document.querySelector('.author');

  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();

    quoteElement.textContent = `"${data.slip.advice}"`;
    authorElement.textContent = 'Advice';
  } catch (error) {
    quoteElement.textContent = 'Quotes are not found';
    authorElement.textContent = '';
    console.error('Error fetching quote:', error);
  }
}
setInterval(fetchQuote, 10000);
fetchQuote();