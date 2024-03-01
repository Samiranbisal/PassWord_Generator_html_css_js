let password_Box = document.getElementById("password");
let length = 10;

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "!@#$%^&*(_+)-='/?|";

let AllChars = upperCase + lowerCase + number + symbol;

function password_Generator(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];

    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];

    password += number[Math.floor(Math.random() * number.length)];

    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += AllChars[Math.floor(Math.random() * AllChars.length)];
    }

    password_Box.value = password;
}

function copyPassword(){
    password_Box.select();
    document.execCommand("copy");
    alert("Copy Password");
}