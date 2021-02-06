// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split();
var lowercase = "abcdefghijklmnopqrstuvwxyz".split();
var numbers = "1234567890".split();
var symbols = "!#$%&'()*+,-./:;<=]>?@[^_`{|}~".split();
var passwordchoice = "";

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

  function userpasswordOptions(){
    var passLength = parseInt(window.prompt("How long would you like your password to be?"));
    
    if (isNaN(passLength) === true) {
        alert("Password length must be provided as a number")
    };

    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
      alert("Password must be at least 8 characters and no more than 128 characters");
      return; 
    } 
}

var confirmUpperCase = confirm("Would you like uppercase letters?");
  if (confirmUpperCase) {
      passwordchoice += confirmUpperCase
  } else {
    passwordchoice
}

var confirmLowerCase = confirm("Would you like lowercase letters?");
  if (confirmLowerCase) {
      passwordchoice += confirmLowerCase
  } else {
    passwordchoice
  }

var confirmNumbers = confirm("Would you like numbers");
  if (confirmNumbers) {
    passwordchoice += confirmNumbers
  } else {
    passwordchoice
  }

var confirmSymbols = confirm("Would you liek symbols?");
  if (confirmSymbols) {
    passwordchoice += confirmSymbols
  } else {
    passwordchoice
  }

if (!confirmUpperCase && !confirmLowerCase && !confirmNumbers && !confirmSymbols) {
  alert("You are required to pick a field of charcter");
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// After that prompt, we need a check to make sure they chose between 8- 128 characters



// Next we will prompt them for what characters they want. Will be a confirm prompt for all 4.



// need to make sure that the user picked at least one character type for password.



// We now need an object to store the user input- meaning the length, what characters will be used in password.



// we will now return the object- we will now know what will be the possible choices.



//After we have user inputs, we want to write a function to randomize the letters inside that we can give the password  (will use math.random to generate that).



// Then we will creat another function- make an array w the results, an array for possible characters, 
// and set an array for guarenteed characters (characters guarenteed for pw)



// then we will creat a loop that goes through the results array- (need to look up push and join)
// Once we push into a new array (results array), using join we will take the characters from results array and turn into a string



// After we turn into a string, we write the password to the page using(.value)