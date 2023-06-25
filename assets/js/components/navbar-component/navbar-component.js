import { navbarFilterItems } from "./navbar-component-data.js";

let navbarFilterComponent = document.getElementById('navbar-filter-menu');
let navbarList = '';
let navbarListItems = '';

function createNavbarElement() {
    navbarList += '<ul class="navbar-menu-list">'; 
    for(let i = 0; i < navbarFilterItems.length; i++) {
        navbarListItems += '<li class="list-item">';
        navbarListItems += '<img width="15" src="' + navbarFilterItems[i].icon + '">';
        navbarListItems += '<a href="#">' + navbarFilterItems[i].title + '</a>' + '</li>';
    }
    navbarList += navbarListItems + '</ul>';
    navbarFilterComponent.innerHTML = navbarList;
}

export default createNavbarElement;

