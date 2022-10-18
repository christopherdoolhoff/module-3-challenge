// Assignment Code
var generateBtn = document.querySelector("#generate");
var userChoiceUppers;
var userChoiceLowers;
var userChoiceNumbers;
var userChoiceSymbols;
var userChoiceLength;

var random = {
  uppers: randomUpperCaseLetter,
  lowers: randomLowerCaseLetter,
  number: randomNumber,
  symbols: randomSymbol
}

// prompt: ask user if they want upper case letters
var uppersQ = function() {
  var userChoiceUppers = window.prompt('Do you want your password to contain upper case letters? Please respond with "yes" or "no".');
  if (userChoiceUppers === 'yes'|| userChoiceUppers ==='no') {
    lowersQ();
  } else {
    uppersQ();
  }
}


// prompt: ask user if they want lower case letters
var lowersQ = function() {
  var userChoiceLowers = window.prompt('Do you want your password to contain lower case letters? Please respond with "yes" or "no".');
  if (userChoiceLowers === 'yes'||'no') {
    numbersQ();
  } else {
    lowersQ();
  }
}


// prompt: ask user if they want numbers
var numbersQ = function() {
  var userChoiceNumbers = window.prompt('Do you want your password to contain numbers? Please respond with "yes" or "no".');
  if (userChoiceNumbers === 'yes'||'no') {
    symbolsQ();
  } else {
    numbersQ();
  }
}


// prompt: ask user if they want symbols
var symbolsQ = function() {
  var userChoiceSymbols = window.prompt('Do you want your password to contain symbols? Please respond with "yes" or "no".');
  if (userChoiceSymbols === 'yes'||'no') {
    lengthQ();
  } else {
    symbolsQ();
  }
}


// prompt: ask user how long
var lengthQ = function() {
  var userChoiceLength = window.prompt('How long do you want your password to be? Please enter a number between 8 and 128.');
  if (userChoiceLength >= 8 && userChoiceLength <=128) {
    writePassword();
  } else {
    lengthQ();
  }
}


// Random Upper Case Letter Function
function randomUpperCaseLetter () {
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

// Random Lower Case Letter Function
function randomLowerCaseLetter () {
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

// Random Number Function
function randomNumber () {
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

// Random Symbol Function
function randomSymbol () {
  var symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  return symbols[Math.floor(Math.random()*symbols.length)];
}

// Functions test in console
console.log(randomUpperCaseLetter());
console.log(randomLowerCaseLetter());
console.log(randomNumber());
console.log(randomSymbol());
console.log(random);
console.log(userChoiceUppers);
console.log(userChoiceLowers);
console.log(userChoiceNumbers);
console.log(userChoiceSymbols);
console.log(userChoiceLength);

// Generate password function
function generatePassword(uppers, lowers, numbers, symbols, length) {
  var generatePassword = "";
  var passwordTypes = uppers + lowers + numbers + symbols;
  var passwordArr = [{uppers}, {lowers}, {numbers}, {symbols}].filter
  (
    item => Object.values(item)[0]
  );
  if(passwordTypes === 0) {
    return'';
  }

  for(let i=0; i<length; i += passwordTypes) {
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", () =>{
  uppersQ();
});

