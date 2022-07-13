'use strict';

// proof of life
console.log('hello world');

// // get the users name... make sure this is a valid name
// let userName = prompt('What is your name?');
// console.log(userName);
// // empty string is they don't type anything
// // null if they hit cancel
// while (!userName) {
// // while (userName === '' || userName === null) {
//   // ask them again
//   userName = prompt('That was not a real name, please try again... enter your name');
//   // will continue to loop until the conditions are met
// }
// alert('congratulations, you can read! Thanks for visiting my site ' + userName);
// console.log('this is the current users name', userName);

// // use a comparison operator to check something
// // if my user is not mickey mouse tell them I am disapointed
// if (userName !== 'Mickey Mouse') {
//   alert('I was hoping you would be someone else');
//   console.log('not mickey');
// }

// revisiting arrays
const favMovies = ['The Rock', 'Con-Air', 'Big Trouble in Little China', 'King Arthur', 'The Dark Night', 'Lord of the Rings trilogy', 'Hackers', 'Fast and the Furious', 'Crimson Tide', 'The Hunt For Red October'];
console.log('this is the current favorite movie array', favMovies);

let movieGuess = prompt('Hey USER can you guess one of my favorite movies?');
console.log('the user guessed my favorite snack was', movieGuess);

// is there a way to check? YES! we can itterate through the array and compare the value to each spot in the array
let correctAnswer = false;
for (let i = 0; i < favMovies.length; i++) {
  if (movieGuess === favMovies[i]) {
    alert('congratualations you got it! Here is the full list ' + favMovies.join('\n'));
    correctAnswer = true;
  } 
  if (i === favMovies.length - 1 && !correctAnswer) {
    alert('sorry you got it wrong, correct answers were: ' + favMovies.join('\n'));
  }
}

let array = ['one', 'two', 'three', 'four', 'five', 'six'];
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < 6; j++) {
    debugger;
    let currentArrayval = array[i];
  }
}


// lets pretend I am making a list of my favorite movies and I am going to let my user guess one... I will give them 5 guesses... if they get it right: alert with 'you got it right' stop having them guess, if they  get it wrong: give them feedback, let them know they got it wrong and how many guesses they have left. on the last guess if still wrong lets give them the correct answers

// array of movies
const movieArray = ['goonies', 'usual suspects', 'moana', 'sound of music', 'empire of the sun'];

let totalGuesses = 4

let correctNumber = false;

while (!correctNumber && totalGuesses > 0){
  let userNumberGuess = prompt(`Guess one of my favorite numbers ${user}.\n It's between 1 and 100.\nYou have four chances to get it right.`);
  for (userNumberGuess)
}
////

let myNumber = 42;
let guessCounter = 0;

while (guessCounter < 4){
  guessCounter++;
  let userAnswer = parseInt(prompt('Can you guess my favorite number? It is between 1 and 100/nYou have four guesses'));
  if (guessCounter === 4){
    alert('Sorry, no more guesses, time to move on');
  } else if (userAnswer === myNumber){
    alert('Wow! That\'s amazing, you got it!');
    guessCounter++;
  } else if (userAnswer < myNumber){
    alert('Too low, my number is bigger than that');
  } else if (userAnswer > myNumber){
    alert('Sorry, my number is smaller than that');
  }
}

let myNumber = 42;
for(let i = 0; i<4; i++){
  let userNumber = prompt('Guess a number between 1 and 100 ' + user)

  if(userNumber == myNumber){
    alert('You got it! That is amazing!')
    score++
    break;
  } else if (userNumber < myNumber){
    alert('Too low, my number is bigger than that')
  } else if (userNumber > myNumber){
    alert('Too high, my number is smaller than that')
  } else {
    alert('Please use numbers')
  } 
}
















// prompt user for guess
// wrap in a while loop - conditions: correct answer and count
// inner loop is a for loop: just looking through an array

// establish a count for my guesses
let guesses = 5 // never go below 1
// set up a flag to indicate the correct answer
let correctMovie = false;

while (!correctMovie && guesses > 0) {
  // gets me started into the loop with my present values
  // prompt user for guess
  let userGuess = prompt('Can you guess one of my favorite movies? You have ' + guesses + ' attempts left.');
  let userGuessLower = userGuess.toLowerCase();
  // chack if user guess matches ANY of the movies
  for (let i = 0; i < movieArray.length; i++) {
    // check if userGuess matches each single movie
    if (userGuessLower === movieArray[i]) {
      alert('You got one! Amazing!');
      correctMovie = true;
      break;
    }
  }
  if (correctMovie) {
    alert('Great job, here is a list of the other choices ' + movieArray);
  } 
  // if they got it wrong and they are on 5-2 we will tell them to try again
  if (!correctMovie && guesses <= 5 && guesses > 1) {
    alert('sorry you are incorrect please guess again');
  } 
  // if they got it wrong and are on the last guess then we will tell them the answers
  if (!correctMovie && guesses === 1) {
    alert('Sorry you are incorrect. Possible options were ' + movieArray);
  }
  guesses--; // change that will break the loop
}




for (let guessCount = 0; guessCount < 5; guessCount++) {
  // gets me started into the loop with my present values
  // prompt user for guess
  let userGuess = prompt('Can you guess one of my favorite movies? You have ' + guesses + ' attempts left.');
  let userGuessLower = userGuess.toLowerCase();
  // chack if user guess matches ANY of the movies
  for (let i = 0; i < movieArray.length; i++) {
    // check if userGuess matches each single movie
    if (userGuessLower === movieArray[i]) {
      alert('You got one! Amazing!');
      correctMovie = true;
      break;
    }
  }
  if (correctMovie) {
    alert('Great job, here is a list of the other choices ' + movieArray);
    break;
  } 
  // if they got it wrong and they are on 5-2 we will tell them to try again
  if (!correctMovie && guesses <= 5 && guesses > 1) {
    alert('sorry you are incorrect please guess again');
  } 
  // if they got it wrong and are on the last guess then we will tell them the answers
  if (!correctMovie && guesses === 1) {
    alert('Sorry you are incorrect. Possible options were ' + movieArray);
  }
  guesses--; // change that will break the loop
}

