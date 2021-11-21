# Random-Password-Generator
 
 In this assignment I will be writing in a JavaScript file to randomly generate a password according to the criteria the user chooses.

 ## Setup

On a whiteboard I planned out all of my pseudocoding in advance, I went through the different variables I would need and what order I should tackle the problems.

I wrote comments in the js file so I had an easy layout to start filling.

 To start the code I made four different variables with arrays in them:
>- var uppercase (Has all of the uppercase letters)
>- var lowercase (Has all of the lowercase letters)
>- var numbers (Has all of the numbers)
>- var symbols (Has all of the symbols)


## Code

In a generatePassword function I made prompts asking the user questions to find out the criteria we will need to make a random password. I made it so that even if they typed it in lowercase it would be turned into uppercase with .toUpperCase.

I then validated what they chose by telling them the options they chose using alerts. I also used if else statements to determine whether what they input was valid; if it was not valid it alerts them why and asks them to try again.

I made another section of if else statements that lets the code figure out if they said YES; if they did say YES then I made new variables for lowercase, uppercase, numbers, and symbols, that are equal to the first variables I made. If they said NO then the new variables just had empty arrays as to not interfere with the random password generation.

Lastly, I combined all of my arrays from the previous steps into one called criteria, and used Math.random to randomly select whatever content they decided to include in their criteria. In the end I just returned the generatedPassword with .join('') so that all of the letters/numbers/symbols would display properly.


## Link and screenshot of webpage: 

https://ncooper00.github.io/Random-Password-Generator/

![image](https://user-images.githubusercontent.com/92492572/142745308-c7b7e08e-abab-48d3-b34e-57ef55ed60f4.png)
