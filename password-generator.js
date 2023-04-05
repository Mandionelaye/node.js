//Tache 4

const generatePassword = require("generate-password");

const passwords = generatePassword.generate({
    length:10,
    numbers:true,
});

console.log(passwords);