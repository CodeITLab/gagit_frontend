const protectedRoutes = ['homepage.html']

function isUserAuthenticated() {
    let token = localStorage.getItem('isUserAuthenticated');
    if(token === null) {
        alert("Access denied. Please login before continuing.")
        window.location.href = 'index.html';
    }
}

function redirectUser() {
    const currentRoute = window.location.pathname;
    const isProtected = protectedRoutes.includes(currentRoute);
    if(!isProtected) {
        isUserAuthenticated();
    }
}

//redirectUser();