'use script';

// Creating the question 6 and 7 from lab03 in class

// Number guessing game

// indicate through an alert if the guess is "too high"

// alert too low

//Guess right

// Give user set amount of attempts to guess correct answer

// for(let i = 0; i < 4; i++){
//   let numGuess = prompt('Try and guess my number');
//   if(+numGuess === myNum){
//     alert('You are correct');
//   } else if(numGuess > myNum){
//     alert('Too high');
//   } else if(numGuess < myNum){
//     alert('Too low');
//   }
// }

// // After all attempts have been exhausted, tell the correct answer

// if(i === 3){
//   alert('The answer was 30');
// }

let myNum = 30;

for(let i = 0; i < 4; i++){
  let numGuess = prompt('Try and guess my number');
  if(+numGuess === myNum){
    alert('You are correct');
    break;
  } else if(numGuess > myNum){
    alert('Too high');
  } else if(numGuess < myNum){
    alert('Too low');
  }
}

if(i === 3){
  alert('The answer was 30');
}
