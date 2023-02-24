const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuotes(data));
}


const displayQuotes = quotes => {
    const blockQuote = document.getElementById('quote');

    const quoteDiv = document.createElement('div');
    quoteDiv.classList.add('quote');
    quoteDiv.innerHTML = `<p> ${quotes.quote}</p>`;
    blockQuote.appendChild(quoteDiv);



}

loadQuotes();