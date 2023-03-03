function loadComments() {
    const url = `https://jsonplaceholder.typicode.com/comments`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayComments(data))

}

function displayComments(comments) {
    const commentsField = document.getElementById('comments-field');
    for (const comment of comments) {
        const commentsDiv = document.createElement('div');
        commentsDiv.classList.add('comments');
        commentsDiv.innerHTML = `
    <h3>post ID: ${comment.postId}</h3>
    <p>Id:${comment.id}</p>
    <p>Name:${comment.name}</p>
    <p>email:${comment.email}</p>
    <button onclick="loadPost()">click Me</button>
    
    `;
        commentsField.appendChild(commentsDiv);
    }

}

const loadPost = () => {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPost(data))
}

const displayPost = posts => {
    const displayfield = document.getElementById('post-field');
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
       <h1>User Id: ${post.userId}</h1>
       `;
        displayfield.appendChild(postDiv);
    })

}


loadComments();