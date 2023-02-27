const loadPhones = async (searchText, dataLimit) => {

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`

    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data, dataLimit);

}


const displayPhones = (phones, dataLimit) => {

    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerText = '';
    // *display 10 phones Only
    const showAll = document.getElementById('showall');
    if (dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10);

        showAll.classList.remove('d-none');
    }
    else {
        showAll.classList.add('d-none');
    }

    //*display no phones found
    const nophones = document.getElementById('no-found-phones');
    if (phones.length === 0) {
        nophones.classList.remove('d-none');

    }
    else {
        nophones.classList.add('d-none');
    }
    //*display all phones
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-4">
                        <img src="${phone.image}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${phone.phone_name}</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.</p>
                                <button onclick="loadPhoneDeteils('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Deteils</button>
                                
                        </div>
                    </div>

        `;
        phoneContainer.appendChild(phoneDiv);
        //*stop loader 
        toggleSpinner(false);

    })
}

//*process search 

const processSearch = (dataLimit) => {
    toggleSpinner(true);
    const searchField = document.getElementById('search-Field');
    const searchText = searchField.value;
    loadPhones(searchText, dataLimit);
}

//*handle search by button click
document.getElementById('btn-search').addEventListener('click', function () {
    //*start Loader
    processSearch(10);

})
//*search input field enter key handler
document.getElementById('search-Field').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        processSearch(10);
    }
})

const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading) {
        loaderSection.classList.remove('d-none');
    }
    else {
        loaderSection.classList.add('d-none');
    }
}

document.getElementById('btn-show-all').addEventListener('click', function () {
    processSearch();
})


const loadPhoneDeteils = async id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayphoneDetails(data.data);
}

const displayphoneDetails = phone => {
    console.log(phone);
    const modalTitle = document.getElementById('phoneDetailModalLabel');
    modalTitle.innerText = phone.name;
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.innerHTML = `
      <p>release date: ${phone.releaseDate ? phone.releaseDate : 'No release date Found'} </p>
      <p>Storage: ${phone.mainFeatures ? phone.mainFeatures.storage : "No storage Information"}
      <p>others:${phone.others ? phone.others.Bluetooth : "No others Information"}
      <img src="${phone.image}">
    `
}
loadPhones('apple');