const listOfCategories = ["Science", "Gaming", "Writing", "World", "Books", "Anime", "Movies"];

let asideCategoriesContainer = document.getElementById('aside-categories-container');

function createAsideCategories() {
    for(let i = 0; i < listOfCategories.length; i++) {
        asideCategoriesContainer.innerHTML += '<li class="aside-categories-item">'
        + listOfCategories[i] + '</li>';
    }
}

export default createAsideCategories;