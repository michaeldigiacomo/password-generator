// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ANn array for a different choice of characters
    // An array for special characters, for uppercase, lowercase, and numbers

// Write a function that allows us to promt the user, should be written ina  functino.  Should be written ina  functino . In that function we are going to ask the user how many words we want the password to be.

// After the prompt,pt, we need a check to make sure they chopse between 8 -128 characters.

// Next we will promt them for what charcters they want. Will be a cobfirmn prompt for all 4.

//  Need to make sure that the user picked at laest one character type for password.

// Need an object to store, meaning the lenght, what charcters will be used in the password.

// We will now return the object, we will now know what will be the possible choices.

// After we have user inputs, write a function to randomize the letters inside that we can give the password (math.random) will save these in an array

// Then we will create another function, make an array w the resultysd, an array for possible characters, and set an array for guarenteed characters

// Then we will create a loop that goes throught the results array- (need to look up push and join)

// Once we push it through an array, the join will take the characters rom the results array and turn them into a string

// We then write the password to the page (value)
