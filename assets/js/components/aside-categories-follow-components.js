let listOfCategories = ["The_Raven_Masque", "The_Real_Wll_Smith", "Cthulhu_is_awake"];

let asideCategoriesContainer = document.getElementById('aside-section-post-body-following-container');

function createAsideCategories() {
    for(let i = 0; i < listOfCategories.length; i++) {
        asideCategoriesContainer.innerHTML += '<li class="aside-following-categories">'
        + listOfCategories[i] + '</li>';
    }
}

export default createAsideCategories;