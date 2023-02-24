const loadCountries = () => {

    fetch('https://restcountries.com/v3.1/all')
        .then(ress => ress.json())
        .then(data => displayCountries(data));
}

const displayCountries = countries => {
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
          <h3>Name:${country.name.common} </h3>
          <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
          <button onclick="loadCountryDetail('${country.cca2}')">display Deteils</div>
        `
        countriesContainer.appendChild(countryDiv);
    })
}

const loadCountryDetail = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDeteil(data[0]))
}

const displayCountryDeteil = country => {
    console.log(country);
    const countryDetail = document.getElementById('country-deteil');
    countryDetail.innerHTML = `
 <h2>Deteils:${country.name.common}</h2>
 <img src="${country.flags.png}">
 
 `
}

loadCountries();