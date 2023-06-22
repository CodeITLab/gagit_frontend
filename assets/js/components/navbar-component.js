const navbarHeadings = ["Home", "Top", "Trending", "New"];
const navbarIcons = [];

let navbarFilterComponent = document.getElementById('navbar-filter-menu');
let navbarList = '';
let navbarListItems = '';

function createNavbarElement() {
    navbarList += '<ul class="navbar-menu-list">'; 
    for(let i = 0; i < navbarHeadings.length; i++) {
        navbarListItems += '<li class="list-item">'
        + '<a href="#">' + navbarHeadings[i] + '</a>' + '</li>';
    }
    navbarList += navbarListItems + '</ul>';
    navbarFilterComponent.innerHTML = navbarList;
}

export default createNavbarElement;

