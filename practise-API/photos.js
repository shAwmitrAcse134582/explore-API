const loadPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayphotos(data))
}

const displayphotos = photos => {

    const photoField = document.getElementById('photo-field');
    for (let photo of photos) {
        const photoDiv = document.createElement('div');
        photoDiv.classList.add('photos');
        photoDiv.innerHTML = `
        <h3> albumId: ${photo.albumId}</h3>
        <p>ID: ${photo.id}</p>
        <p>title: ${photo.title}</p>
       
        <img scr="${photo.thumbnailUrl}" alt=" ">
        <p>
        <a href="${photo.url}"> </a></p>
        `;
        photoField.appendChild(photoDiv);
    }

}

loadPhotos();