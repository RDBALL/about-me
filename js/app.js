'use strict';

let user = prompt('what is your name?');

let score = 0;

alert(`Welcome to my site ${user}! Take this short quiz and find out a little more about me`);

// The solution to this guessing game is modeled after Adrians code during the paired programming assignment.https://github.com/AdrianButler

askQuestion(`Okay ${user} first question \nYes or No...\nDo I have a dog?`, true, 'That\'s right! I have three dogs','Sorry, that\'s wrong');
askQuestion(`Second question ${user} \nYes or No...\nHave I traveled outside of the country?`, true, 'You are correct!','Sorry, that\'s wrong');
askQuestion(`Alright ${user}, third question \nYes or No...\nHave I ever been in a rodeo?`, false, 'You got it! I have not been in a rodeo before','Sorry, even though I\'m from Montana I have not been in a rodeo');
askQuestion(`Question four out of seven, almost done ${user}\nYes or No...\nDo I believe that the movie "Con Air" is a cinematic masterpiece?`, true, `You are absolutely right ${user}, Con Air is an amazing film`, 'Sorry, you got this one wrong and I\'m going to have to ask you to put the bunny back in the box');
askQuestion(`Almost done ${user}\nYes or No...\nSpeaking of airplanes have I ever jumped out of one?`, true, `Correct ${user}! I can say that I have taken off in more planes than I have landed in`, 'I actually have multiple jumps!');
question6();
question7();

function askQuestion(question, answer, correctAnswerMessage, wrongAnswerMessage){
  let userAnswer = prompt(question).toLowerCase();
  if (userAnswer === 'n' || userAnswer === 'no'){
    userAnswer = false;
  } else if(userAnswer === 'y' || userAnswer === 'yes'){
    userAnswer = true;
  } else {
    alert('Please answer yes or no');
  } if (userAnswer === answer){
    alert(correctAnswerMessage);
    score++;
  }else {
    alert(wrongAnswerMessage);
  }
}

function question6() {
  let randomNum = (Math.floor(Math.random() * 10) + 1);
  console.log('the number is:', randomNum);
  for (let i = 0; i < 4; i++){
    let userGuess = prompt(`Let's change it up ${user}. Guess a number from 1-10, you have four chances`);
    userGuess = Number(userGuess);
    if(randomNum === userGuess) {
      alert('Whoa that is amazing, you got it!');
      score++;
      break;
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
}

function question7() {
  let favMovies = ['the rock', 'con air', 'big trouble in little china', 'king arthur', 'lord of the rings trilogy', 'hackers', 'crimson tide', 'the fast and the furious', 'the hunt for red october'];
  let correctAnswer = false;
  for (let i = 0; i < 6; i++) {
    if(correctAnswer){
      break;
    } else {
      let userMovieGuess = prompt('Guess one of my top 10 favorite movies, you have 6 chances to get this!').toLowerCase();
      for (let j = 0; j < favMovies.length; j++){
        if (favMovies[j] === userMovieGuess){
          alert(`That is one of my favorite movies ${user}, here is the whole list \nThe Rock\nCon Air\nBig Trouble in Little China\nKing Arthur\nLord of the Rings trilogy\nHackers\nBloodsport\nCrimson Tide\nThe Fast and the Furious\nThe Hunt for Red October`);
          score++;
          correctAnswer = true;
          break;
        }
      }
    } if (i >= 5) {
      alert(`Sorry, ${user} you are out of guesses. Here are the answers:\nThe Rock\nCon Air\nBig Trouble in Little China\nKing Arthur\nLord of the Rings trilogy\nHackers\nBloodsport\nCrimson Tide\nThe Fast and the Furious\nThe Hunt for Red October`);
    }
  }
}

alert(`Thanks for taking my quiz ${user} your final score was ${score} out of 7`);
