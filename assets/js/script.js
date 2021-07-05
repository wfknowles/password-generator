// Assignment code here

/* 
  On click 
    - generate prompt for password length (Value between 8 and 128)
    - generate a series of prompts for lowercase, uppercase, numeric, and/or special characters
    - validate responses with minimum criteria being at least one selected character type
    - create password per requirements
    - send to ui
*/

function validateLength(len) {

}

function validateCharacters(chars) {

}

function validateRequirements(reqs) {
  var len = idateLength(reqs.length);
  var chars = validateCharacters(reqs.characters);
}

function createPassword(reqs) {

}

function generateRequirements() {

  //Gather Responses
  var length = window.prompt("How many characters do you want in your password? Input a value between 8 and 128.");
  var lowercase = window.confirm("Do you want to use lowercase letters in your new password?");
  var uppercase = window.confirm("Do you want to use uppercase letters in your new password?");
  var numeric = window.confirm("Do you want to use numbers in your new password?");
  var special = window.confirm("Do you want to use special characters in your new password?");

  //Formate Responses As Object
  var reqs = {
    length: Number(length),
    characters: {
      lowercase: lowercase,
      uppercase: uppercase,
      numeric: numeric,
      special: special
    }
  }

  console.log(reqs);
  // if (validateRequirements(reqs)) {
  //   return reqs;
  // } else {
  //   return false;
  // }
}

function generatePassword() {
  var requirements = generateRequirements();
  // var generatedPassword = createPassword(requirements);
  // return generatedPassword;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);