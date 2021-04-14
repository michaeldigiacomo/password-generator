var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var symbols = "!#$%&'()<=^_`{|}~*+]>?@[,-./:;";
var passwordchoice = "";
var array = [];
var length = 0;

function startPassword() {
  var startQuestion = confirm("Would you like to create a password?");
  console.log(startQuestion);

  var passLength = parseInt(
    window.prompt("How long would you like your password to be?")
  );

  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert(
      "Password must be at least 8 characters and no more than 128 characters"
    );
    return "Password must be at least 8 characters and no more than 128 characters";
  } 
  else {
    length += passLength;
  }

  var confirmUppercase = confirm("Would you like uppercase letters?");
  if (confirmUppercase) {
    passwordchoice += confirmUppercase;
  } else {
    passwordchoice;
  }

  var confirmLowercase = confirm("Would you like lowercase letters?");
  if (confirmLowercase) {
    passwordchoice += confirmLowercase;
  } else {
    passwordchoice;
  }

  var confirmNumbers = confirm("Would you like numbers?");
  if (confirmNumbers) {
    passwordchoice += confirmNumbers;
  } else {
    passwordchoice;
  }

  var confirmSymbols = confirm("Would you like symbols?");
  if (confirmSymbols) {
    passwordchoice += confirmSymbols;
  } else {
    passwordchoice;
  }
}

var password = "";

if (confirmUppercase) {
  array += uppercase;
}
if (confirmLowercase) {
  array += lowercase;
}
if (confirmNumbers) {
  array += numbers;
}
if (confirmSymbols) {
  array += symbols;
}
console.log(array);

alert("You are required to pick a field of charcter");

for (var i = 0; i < characters; i++) {
  var number = Math.floor(Math.random() * array.length);
}

console.log(passwordchoice);

// Write password to the #password input
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
