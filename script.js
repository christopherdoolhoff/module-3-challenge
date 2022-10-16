// Assignment Code
var generateBtn = document.querySelector("#generate");

var random = ({
  uppers:randomUpperCaseLetter,
  lowers: randomLowerCaseLetter,
  number:  randomNumber,
  symbols: randomSymbol
})

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

// Generate password function
function generatePassword(uppers, lowers, numbers, symbols, length) {
  var generatePassword = "";
  var passwordTypes = uppers + lowers + numbers + symbols;
  var passwordArr = [{uppers}, {lowers}, {numbers}, {symbols}].filter
  (
    item => Object.values(item)[0]
  );
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// generateBtn.addEventListener("click", () => {
//   window.confirm("The computer chose ");
// });
