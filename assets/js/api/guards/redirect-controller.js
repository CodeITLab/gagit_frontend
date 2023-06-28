const protectedRoutes = {
    '/homepage': true
}

function isUserAuthenticated() {
    let token = localStorage.getItem('isUserAuthenticated');
    if(!token) {
        window.location.href = 'index.html';
    }
}