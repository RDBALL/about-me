'use strict';

let user = prompt('what is your name?');

let score = 0;
// score++

alert(`Welcome to my site ${user}! Take this short quiz and find out a little more about me`);

let questionOne = prompt(`Okay ${user} first question \nYes or No...\nDo I have a dog?`).toLowerCase();
if(questionOne === 'y' || questionOne === 'yes'){
  // console.log('That\'s right! I have three dogs');
  alert('That\'s right! I have three dogs');
  score++;
} else if(questionOne === 'n' || questionOne === 'no'){
  // console.log('Sorry, that\'s wrong');
  alert('Sorry, that\'s wrong');
} else{
  // console.log('Answer yes or no');
  alert ('Answer yes or no');
}

let questionTwo = prompt(`Second question ${user} \nYes or No...\nHave I traveled outside of the country?`).toLowerCase();
if(questionTwo === 'y' || questionTwo === 'yes'){
  // console.log('You are correct!');
  alert('You are correct!');
  score++;
} else if(questionTwo === 'n' || questionTwo === 'no'){
  // console.log('Sorry, that\'s wrong');
  alert('Sorry, that\'s wrong');
} else{
  // console.log('Answer yes or no');
  alert ('Answer yes or no');
}

let questionThree = prompt(`Alright ${user}, third question \nYes or No...\nHave I ever been in a rodeo?`).toLowerCase();
if(questionThree === 'y' || questionThree === 'yes'){
  // console.log('Sorry, even though I\'m from Montana I have not been in a rodeo');
  alert('Sorry, even though I\'m from Montana I have not been in a rodeo');
} else if(questionThree === 'n' || questionThree === 'no'){
  // console.log('You got it! I have not been in a rodeo before');
  alert('You got it! I have not been in a rodeo before');
  score++;
} else{
  // console.log('Answer yes or no');
  alert ('Answer yes or no');
}

let questionFour = prompt(`Question four out of five, almost done ${user}\nYes or No...\nDo I believe that the movie "Con Air" is a cinematic masterpiece?`).toLowerCase();
if(questionFour === 'y' || questionFour === 'yes'){
  // console.log(`You are absolutely right ${user}, Con Air is an amazing film`);
  alert(`You are absolutely right ${user}, Con Air is an amazing film`);
  score++;
} else if(questionFour === 'n' || questionFour === 'no'){
  // console.log('Sorry, you got this one wrong and I\'m going to have to ask you to put the bunny back in the box');
  alert('Sorry, you got this one wrong and I\'m going to have to ask you to put the bunny back in the box');
} else{
  // console.log('Answer yes or no');
  alert ('Answer yes or no');
}

let questionFive = prompt(`Last question ${user}\nYes or No...\nSpeaking of airplanes have I ever jumped out of one?`).toLowerCase();
if(questionFive === 'y' || questionFive === 'yes'){
  // console.log(`Correct ${user}! I can say that I have taken off in more planes than I have landed in`);
  alert(`Correct ${user}! I can say that I have taken off in more planes than I have landed in`);
  score++;
} else if(questionFive === 'n' || questionFive === 'no'){
  // console.log('I actually have multiple jumps!');
  alert('I actually have multiple jumps!');
} else{
  // console.log('Answer yes or no');
  alert ('Answer yes or no');
}

// console.log(`Thanks for taking my quiz ${user}`);
alert(`Thanks for taking my quiz ${user} your final score was ${score} out of 5`);
