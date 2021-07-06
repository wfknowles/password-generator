// Assignment code here

function errorMessage(message) {
  if (message) {
    window.alert(message);
  } else {
    window.alert("An error has occured. Please try again.");
  }
}

function rescueLength() {
  errorMessage("Error: You must input a number between 8 and 128 for the length of your new password.")
  var rescue = window.prompt("Please re-enter how many characters you want in your new password. REMINDER: Value must be a number between 8 and 128");
  
  if (rescue) {
    validateLength(Number(rescue));
  } else {
    errorMessage();
  }
}

function validateLength(len) {
  if (!isNaN(len) && len >= 8 && len <= 128) {
    return len;
  } else {
    rescueLength();
  }
}

function rescueCharacters() {
  errorMessage("Error: You must select at least 1 type of character for your new password. Please reselect with characters you want in your new password.")
  var lowercase = window.confirm("Do you want to use lowercase letters in your new password?");
  var uppercase = window.confirm("Do you want to use uppercase letters in your new password?");
  var numeric = window.confirm("Do you want to use numbers in your new password?");
  var special = window.confirm("Do you want to use special characters in your new password?");

  var chars = {
    lowercase: lowercase,
    uppercase: uppercase,
    numeric: numeric,
    special: special
  };

  validateCharacters(chars)
}

function validateCharacters(chars) {
  var count = 0

  for (const value in chars) {
    if (chars[value] === true) {
      count++;
    }
  }

  if (count > 0) {
    return chars;
  } else {
    rescueCharacters();
  }
}

function validateRequirements(reqs) {
  var len = validateLength(reqs.length);
  var chars = validateCharacters(reqs.characters);

  var validReqs = {
    length: len,
    characters: chars
  }

  return validReqs;
}

function getRandomCharacter(string) {
  char = string.charAt(Math.floor(Math.random() * string.length));
  return char;
}

function addCharacterString(key) {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "12345678901234567890";
  var special = "!#$%&()*+,-.:;?@[^_";

  switch (String(key)) {
    case 'lowercase':
      return lowercase;
    case 'uppercase':
      return uppercase;
    case 'numeric':
      return numeric;
    case 'special':
      return special;
  }
}

function getCharacters(reqs) {
  var chars = "";

  for (const key in reqs.characters) {
    if (reqs.characters[key] === true) {
      chars += addCharacterString(key);
    }
  }

  return chars;
}

function createPassword(reqs) {
  var password = "";
  var chars = getCharacters(reqs);

  for (var i = 0; i < reqs.length; i++) {
    password += getRandomCharacter(chars);
  }

  return password;
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

  //Validate Reqs
  validatedReqs = validateRequirements(reqs);

  //Return Validated Reqs
  return validatedReqs;
}

function generatePassword() {
  var requirements = generateRequirements();
  var generatedPassword = createPassword(requirements);
  return generatedPassword;
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