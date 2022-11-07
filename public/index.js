async function fetchData(){
    let response = await fetch('http://localhost:5000/getRecipes');
    let data = await response.json();
    console.log(data);
    let container = document.getElementById('resultContainer')
    for (const recipe of data) {
        let card = document.createElement('div');
        let cardContent = document.createElement('div');
        let title = document.createElement('h2');
        let ingredients = document.createElement('p');
        let description = document.createElement('p');
        title.innerText = recipe.name;
        ingredients.innerText = recipe.ingredients;
        description.innerText = recipe.description;
        card.classList.add('card','center','col','s12');
        title.classList.add('card-title');
        ingredients.classList.add('card-content');
        cardContent.appendChild(title);
        cardContent.appendChild(ingredients);
        cardContent.appendChild(description);
        card.appendChild(cardContent);
        container.appendChild(card);
    }
}

fetchData();