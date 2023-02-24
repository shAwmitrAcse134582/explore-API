const loadUser = () => {
    fetch('https://randomuser.me/api/?results=1')
        .then(res => res.json())
        .then(data => displayUser(data.results))
}


const displayUser = users => {
    const userContainer = document.getElementById('user-profile');
    for (const user of users) {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user')
        userDiv.innerHTML = `
       <h3>user Name:${user.name.first} ${user.name.last}</h3>

       <p>Email:${user.email}</p>
       <p>Street:${user.location.street.number}
       ${user.location.street.name}</p> 
       <p>User location:${user.location.city} ${user.location.country}</p>
       <p>image:</p>
       <img src="${user.picture.large}">
       
    `;
        userContainer.appendChild(userDiv);
    }
}

loadUser();