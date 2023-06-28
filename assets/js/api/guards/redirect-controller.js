const protectedRoutes = {
    '/homepage': true
}

function isUserAuthenticated() {
    let token = localStorage.getItem('isUserAuthenticated');
    if(!token) {
        alert("Access denied. Please login before continuing.")
        window.location.href = 'index.html';
    }
}

function router() {

}