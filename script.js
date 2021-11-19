// Assignment Code
var generateBtn = document.querySelector("#generate");

  var capital = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var numbers = [1,2,3,4,5,6,7,8,9,0];
  var symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", "<", ",", ">", ".", "?", "/"];

function generatePassword() {
  console.log("Hey")
// 1. prompt user for password criteria
  //    a. prompt for length of password 8-128 characters
  var length = prompt ("What length should your password be from 8-128 characters?")
  console.log(length)
  //    b. prompt if they want lowercase
  //    c. prompt if they want uppercase
  //    d. prompt if they want numbers
  //    e. prompt if they want special characters
// 2. validate the input
// 3. Generate password


// 4. Display the generated password
  return "Generated password goes here"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
