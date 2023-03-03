const loadSports = () => {
    const url = `https://www.thesportsdb.com/api/v1/json/3/all_leagues.php`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySports(data.leagues));
}

const displaySports = sports => {
    const sportsField = document.getElementById('league');

    for (const sport of sports) {
        const sportsDiv = document.createElement('div');
        sportsDiv.classList.add('league');
        sportsDiv.innerHTML = `
        <h3>idLeague:"${sport.idLeague}"</h3>
        <p>League Name:"${sport.strLeague}"</p>
        <p>Sports type:"${sport.strSport}"

        `;
        sportsField.appendChild(sportsDiv);

    }


}

loadSports();


