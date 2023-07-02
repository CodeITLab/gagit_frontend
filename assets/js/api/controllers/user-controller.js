const userDataURL = "https://gaggit.onrender.com/isUserLoggedIn";

async function userLogin() {
    const response = await fetch(userDataURL);
    const data = await response.json();
    authoriseUser(data.authenticated);
    redirectTheUser();
}

function authoriseUser(isUserAuthenticated) {
    if(isUserAuthenticated) {
        localStorage.setItem("isUserAuthenticated", isUserAuthenticated.toString());    
    }
}

function redirectTheUser() {
    if(localStorage.getItem('isUserAuthenticated')) {
        window.location.href = 'homepage.html';
    }
}
