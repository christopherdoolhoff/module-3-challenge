// Assignment Code
// variables
var generateBtn = document.querySelector("#generate");
var userChoiceUppers = document.querySelector("#uppercase");
var userChoiceLowers = document.querySelector("#lowercase");
var userChoiceNumbers = document.querySelector("#numbers");
var userChoiceSymbols = document.querySelector("#symbols");
var userChoiceLength = document.querySelector("#length");
var userChoiceResults = document.querySelector("#password");

var random = {
  uppers: randomUpperCaseLetter,
  lowers: randomLowerCaseLetter,
  numbers: randomNumber,
  symbols: randomSymbol,
};

// Random Upper Case Letter Function
function randomUpperCaseLetter() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Random Lower Case Letter Function
function randomLowerCaseLetter() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Random Number Function
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Random Symbol Function
function randomSymbol() {
  var symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
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
  let generatedPassword = "";
  var userOptions = uppers + lowers + numbers + symbols;
  var optionsArr = [{ uppers }, { lowers }, { numbers }, { symbols }].filter(
    (item) => Object.values(item)[0]
  );

  // Doesn't have a selected type
  if (userOptions === 0) {
    return "";
  }

  // create a loop
  for (let i = 0; i < length; i += userOptions) {
    optionsArr.forEach((type) => {
      var funcName = Object.keys(type)[0];
      generatedPassword += random[funcName]();
    });
  }

  var finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

// Add event listener to generate button, password length, and options checkboxs
// generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", () => {
  var pickUpper = userChoiceUppers.checked;
  var pickLower = userChoiceLowers.checked;
  var pickNumber = userChoiceNumbers.checked;
  var pickSymbol = userChoiceSymbols.checked;
  var pickLength = +userChoiceLength.value;

  userChoiceResults.innerText = generatePassword(
    pickUpper,
    pickLower,
    pickNumber,
    pickSymbol,
    pickLength
  );
});