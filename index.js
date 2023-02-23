function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')

        .then(res => res.json())
        .then(data => displayUser(data))
}

function displayUser(data) {
    const ul = document.getElementById('users-list');
    for (let user of data) {
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;

        ul.appendChild(li);

    }
}



function deletePost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
    });
}


function patchAPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PATCH',
        body: JSON.stringify({
            title: 'foo',
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}


function crateApost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}