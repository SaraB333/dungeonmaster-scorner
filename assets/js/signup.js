// Wait for the DOM to load fully before running any Javascript
document.addEventListener("DOMContentLoaded", () => {

        //Sign Up Page

let usernames = [];

// Write your code here
let form = document.getElementById('registration-form');
form.addEventListener('submit', handleSubmit);
let errorMsg = document.getElementById('errors');
function handleSubmit(event) {
    event.preventDefault;
    let usernameInput = document.getElementById('username').value;
    if (usernames.includes(usernameInput)) {
        errorMsg.innerHTML = `Sorry, the username ${usernameInput} is already in use. Please choose another username.`;
    } else {
        usernames.push(usernameInput);
        form.submit();
        console.log(usernames);
    }
}

})