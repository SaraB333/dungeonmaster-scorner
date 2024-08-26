// Wait for the DOM to load fully before running any Javascript
document.addEventListener("DOMContentLoaded", () => {

    //function to bring the user back to the home page
    function goHome() {
        window.location.href = 'index.html';
    }

    // brings the function into the global window for the onclick features
    window.goHome = goHome;

});