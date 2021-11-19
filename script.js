// Assignment Code
var generateBtn = document.querySelector("#generate");

  var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var numbers = ["1","2","3","4","5","6","7","8","9","0"];
  var symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", "<", ",", ">", ".", "?", "/"];

function generatePassword() {
  console.log("Hey")
// 1. prompt user for password criteria
  //    a. prompt for length of password 8-128 characters
  var length = prompt ("What length should your password be from 8-128 characters?");
  console.log(length);
  //    b. prompt if they want lowercase
  var wouldYouLikeLowercase = prompt ("Would you like lowercase letters? YES/NO");
  wouldYouLikeLowercase.toUpperCase
  console.log(wouldYouLikeLowercase)
  //    c. prompt if they want uppercase
  var wouldYouLikeUppercase = prompt ("Would you like uppercase letters? YES/NO");
  wouldYouLikeUppercase.toUpperCase
  console.log(wouldYouLikeUppercase)
  //    d. prompt if they want numbers
  var wouldYouLikeNumbers = prompt ("Would you like numbers? YES/NO")
  wouldYouLikeNumbers.toUpperCase
  console.log(wouldYouLikeNumbers)
  //    e. prompt if they want special characters
  var wouldYouLikeSpecial = prompt ("Would you like special characters? YES/NO")
  wouldYouLikeSpecial.toUpperCase
  console.log(wouldYouLikeSpecial)
// 2. validate the input
  if (length < 8) {
    alert ("The length you chose was too short, please try again.")
    return
  } else if (length > 128) {
    alert ("The length you chose was too long, please try again.")
  } else {
    alert ("You chose to make the length " + length + " characters.")
  }

  if (wouldYouLikeLowercase === "YES"){
    alert ("You decided to include lowercase letters.")
  } else if (wouldYouLikeLowercase === "NO") {
    alert ("You decided not to include lowercase letters.")
  } else {
    alert ("You did not input a valid response for lowercase letters, please try again.")
    return
  }

  if (wouldYouLikeUppercase === "YES"){
    alert ("You decided to include uppercase letters.")
  } else if (wouldYouLikeUppercase === "NO") {
    alert ("You decided not to include uppercase letters.")
  } else {
    alert ("You did not input a valid response for uppercase letters, please try again.")
    return
  }

  if (wouldYouLikeNumbers === "YES"){
    alert ("You decided to include numbers.")
  } else if (wouldYouLikeNumbers === "NO") {
    alert ("You decided not to include numbers.")
  } else {
    alert ("You did not input a valid response for numbers, please try again.")
    return
  }

  if (wouldYouLikeSpecial === "YES"){
    alert ("You decided to include special characters.")
  } else if (wouldYouLikeSpecial === "NO") {
    alert ("You decided not to include special characters.")
  } else {
    alert ("You did not input a valid response for special characters, please try again.")
    return
  }

// 3. Generate password

if (wouldYouLikeLowercase === "YES") {
  var youLikeLowercase = lowercase
} else {
  var youLikeLowercase = [];
}
console.log(youLikeLowercase)

if (wouldYouLikeUppercase === "YES") {
  var youLikeUppercase = uppercase
} else {
  var youLikeUppercase = [];
}


if (wouldYouLikeNumbers === "YES") {
  var youLikeNumbers = numbers
} else {
  var youLikeNumbers = [];
}


if (wouldYouLikeSpecial === "YES") {
  var youLikeSpecial = symbols
} else {
  var youLikeSpecial = [];
}



var criteria = [...youLikeLowercase, ...youLikeUppercase, ...youLikeNumbers, ...youLikeSpecial].sort( () => .5 - Math.random() )
console.log(criteria)

var generatedPassword = [];
  for (i = 0; i < length; i++) {
  const characterCode = criteria[Math.floor(Math.random() * length)]
  generatedPassword.push(characterCode)
  }
  return generatedPassword.join('')
console.log(generatedPassword)

// var randomNums = [];
// for(var i=length; i=length; i++) {
//     randomNums = criteria[Math.random()*(criteria.length-1)];
//     if(!randomNums.contains(x)){
//         randomNums.push(x);
//     }
// }
// console.log(randomNums)

// var indexArr = [];
// while (indexArr.length = length) {
//   var rndIndex = Math.random()*(criteria.length-1);
//   if (indexArr.indexOf(rndIndex) == -1)
//       indexArr.push(rndIndex)
// }
// console.log(indexArr)

// criteria[Math.floor(Math.random() * criteria.length, length)]
// console.log(criteria[Math.floor(Math.random() * criteria.length, length)])

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
