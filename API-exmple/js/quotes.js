const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => console.log(data));
}


const displayQuotes = quote => {
    const blockQuote = document.getElementById('quote');
    blockQuote.innerText = quote.quote;

}