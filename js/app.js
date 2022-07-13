'use strict';

let user = prompt('what is your name?');

let score = 0;

alert(`Welcome to my site ${user}! Take this short quiz and find out a little more about me`);

let questionOne = prompt(`Okay ${user} first question \nYes or No...\nDo I have a dog?`).toLowerCase();
if(questionOne === 'y' || questionOne === 'yes'){
  alert('That\'s right! I have three dogs');
  score++;
} else if(questionOne === 'n' || questionOne === 'no'){
  alert('Sorry, that\'s wrong');
} else{
  alert ('Answer yes or no');
}

let questionTwo = prompt(`Second question ${user} \nYes or No...\nHave I traveled outside of the country?`).toLowerCase();
if(questionTwo === 'y' || questionTwo === 'yes'){
  alert('You are correct!');
  score++;
} else if(questionTwo === 'n' || questionTwo === 'no'){
  alert('Sorry, that\'s wrong');
} else{
  alert ('Answer yes or no');
}

let questionThree = prompt(`Alright ${user}, third question \nYes or No...\nHave I ever been in a rodeo?`).toLowerCase();
if(questionThree === 'y' || questionThree === 'yes'){
  alert('Sorry, even though I\'m from Montana I have not been in a rodeo');
} else if(questionThree === 'n' || questionThree === 'no'){
  alert('You got it! I have not been in a rodeo before');
  score++;
} else{
  alert ('Answer yes or no');
}

let questionFour = prompt(`Question four out of seven, almost done ${user}\nYes or No...\nDo I believe that the movie "Con Air" is a cinematic masterpiece?`).toLowerCase();
if(questionFour === 'y' || questionFour === 'yes'){
  alert(`You are absolutely right ${user}, Con Air is an amazing film`);
  score++;
} else if(questionFour === 'n' || questionFour === 'no'){
  alert('Sorry, you got this one wrong and I\'m going to have to ask you to put the bunny back in the box');
} else{
  alert ('Answer yes or no');
}

let questionFive = prompt(`Almost done ${user}\nYes or No...\nSpeaking of airplanes have I ever jumped out of one?`).toLowerCase();
if(questionFive === 'y' || questionFive === 'yes'){
  alert(`Correct ${user}! I can say that I have taken off in more planes than I have landed in`);
  score++;
} else if(questionFive === 'n' || questionFive === 'no'){
  alert('I actually have multiple jumps!');
} else{
  alert ('Answer yes or no');
}


// Number Guessing Game using a random number generator
let randomNum = (Math.floor(Math.random() * 10) + 1);
console.log('the number is:', randomNum);
for (let i = 0; i < 4; i++){
  let userGuess = prompt(`Let's change it up ${user}. Guess a number from 1-10, you have four chances`);
  userGuess = Number(userGuess);
  if(randomNum === userGuess) {
    alert('Whoa that is amazing, you got it!');
    i = 4;
    score++;
  }else if (i < 3) {
    if(randomNum > userGuess){
      alert(`Sorry but that's too low...try again ${user}!`);
    }else {
      alert(`Sorry but that's too high...try again${user}!`);
    }
  }else {
    alert ('Nope you didn\'t guess it, good try though.');
  }
}


// // Guessing game using array of favorite movies as potential answers

let favMovies = ['The Rock', 'Con Air', 'Big Trouble in Little China', 'King Arthur', 'Lord of the Rings trilogy', 'Hackers', 'Crimson Tide', 'The Hunt For Red October'];

// // setting conditions for correct guess
// // I can't figure out how to stucture the array in the alert without using the .join() helper

let correctAnswer = false;
for (let i = 0; i < 6; i++) {
  if(correctAnswer){
    break;
  } else {
    let userMovieGuess = prompt('Guess one of my top 10 favorite movies, you have 6 chances to get this!');
    for (let i = 0; i < favMovies.length; i++){
      if (favMovies[i] === userMovieGuess){
        alert(`That is one of my favorite movies ${user}!`);
        score++
        correctAnswer = true;
        break;
      }
    }
  }
}

alert(`Thanks for taking my quiz ${user} your final score was ${score} out of 7`);
