const username = document.querySelector('input');
const password = document.getElementById('password');


const validateAccount = (input) => {
    if(input.length < 0 || input == null || input == "") {
        alert('Please enter a username and password');
    }
};

validateAccount(username);