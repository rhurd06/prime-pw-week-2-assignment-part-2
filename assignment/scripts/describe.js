// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it to 'Dane'.
// We check if name is 'Mary', if it is the console would log 'Hi, Mary!''
// Since it is not Mary, we console log 'How do you do?'
//
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable named 'secret'.
// We make another variable named 'code' and set it to '123'.
// We check if 'code' is an exact match to '123';
  //it is so we 'secret' to "super"
  //We then also multiply code by 2.
// Next we check if 'code' is greater than '250';
  //it is not so we log nothing.
// Since only the first 'if' statementwas true
//  we console log the value of 'secret' as "super".

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We make a variable named 'isStudent' and set it to a value of 'true'.
// We make another variable named 'age' and set it to a value of '34'.
// We make a final variable named 'zip' and set it to a value of '55407'.
// Next we check 'isStudent' to see if it is an exact match to 'true' and that the 'zip' is greater than 8000.
// Because only one statement is true we move onto the next step in code.
// Now we check if 'isStudent' is an exact match to 'false' or if the 'age' is less than '30'.
// Both of those statements are false so we move on.
// Then we check if 'isStudent' is and exact match to 'true'.
// It is so we see a console log of 'Welcome to Prime!'.
// If this statement had also been false we would have seen a console log of 'How about the weather?'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.

number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

// FIX- 'colorOne' should be set to 'blue' as stated in the instructions, and 'colorTwo' should be set to 'red'. We also change 'colorTwo' to 'purple' at the end of the script.
/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

//FIX the code should read 'if (temp > 39 && time >= 4)' then console. log ('throw away the food');

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- they are, so we console.log 'enter'.
/*
let age = 21;
const minAge = 21;

//FIX the console logs are reversed, for the 'if' statement it should read 'enter' and the 'else' statement should be 'no entry', because this is a boolean variable where the 'if' checks true and the 'else' checks false.

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
