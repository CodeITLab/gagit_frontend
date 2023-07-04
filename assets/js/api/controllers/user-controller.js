const userDataURL = "https://gaggit.onrender.com/isUserLoggedIn";

async function userLogin() {
    const response = await fetch(userDataURL);
    const data = await response.json();
    authoriseTheUser(data.authenticated);
    redirectTheUser();
}

function authoriseTheUser(isUserAuthenticated) {
    if(isUserAuthenticated) {
        localStorage.setItem("isUserAuthenticated", isUserAuthenticated.toString());    
    }
}

function redirectTheUser() {
    if(localStorage.getItem('isUserAuthenticated')) {
        window.location.href = 'homepage.html';
    }
}

function logoutTheUser() {
    localStorage.removeItem('isUserAuthenticated');
    window.location.href = '/';
}