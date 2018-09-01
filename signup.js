

let name = document.getElementById('username').value;
let password = document.getElementsByName('password').value;
let reqPassword = document.getElementsByName('psw-repeat').value;


if (name.value === '' || password.value === '' || reqPassword.value === '') {
        alert ('Please fill in all your fields')
} else if (password !== reqPassword) {
        alert ('Passwords must match')
} else {
        alert (`You are Officailly signed up!`)
}






function validate()

let name = document.getElementById('username');
let password = document.getElementById('password');
let reqPassword = document.getElementById('psw-repeat');

console.log(password)
console.log(name)
console.log(reqPassword)


if (name.value === '' || password.value === '' || reqPassword.value === '') {
        alert ('Please fill in all your fields')
} else if (password.value !== reqPassword.value) {
        alert ('Passwords must match')
} else {
        alert (`You are Officailly signed up!`)
}