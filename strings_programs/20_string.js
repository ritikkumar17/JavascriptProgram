// Validate email

let email = "ritikchugh17@gmail.com"
let isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
console.log(isValidEmail.test(email))