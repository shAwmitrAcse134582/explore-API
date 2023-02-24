

const loadMeal = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaysMeals(data.meals))
}

const displaysMeals = meals => {
    const mealsContainer = document.getElementById('meal-container')
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        const mealDiv = document.createElement('div')
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
     <div class="card h-100">
     <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
     <div class="card-body">
         <h5 class="card-title">${meal.strMeal}</h5>
         <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
     </div>
 </div>  
     `
        mealsContainer.appendChild(mealDiv);

    });
}

const searchFood = () => {
    const searchFeild = document.getElementById('search-field');
    const searchText = searchFeild.value;
    loadMeal(searchText);
    searchFeild.value = '';

}

