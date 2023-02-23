function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data));
}

function displayPost(posts) {
    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        const postdiv = document.createElement('div');
        postdiv.classList.add('post');
        postdiv.innerHTML = ` <h4>User-${post.userId}</h4>
        <h5>post:${post.title}</h5>
        <p>${post.body}</p> `;
        postContainer.appendChild(postdiv);
    }
}

loadPost();


