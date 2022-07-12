'use strict';

let user = prompt('what is your name?');

alert(`Welcome to my site ${user}! Take this short quiz and find out a little more about me`);

let questionOne = prompt(`Okay ${user} first question \nYes or No...\nDo I have a dog?`).toLowerCase();
if(questionOne === 'y' || questionOne === 'yes'){
  alert('That\'s right! I have three dogs');
} else if(questionOne === 'n' || questionOne === 'no'){
  alert('Sorry, that\'s wrong');
} else{
  alert ('Answer yes or no');
}

let questionTwo = prompt(`Second question ${user} \nYes or No...\nHave I traveled outside of the country?`).toLowerCase();
if(questionTwo === 'y' || questionTwo === 'yes'){
  alert('You are correct!');
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
} else{
  alert ('Answer yes or no');
}

let questionFour = prompt(`Question four out of five, almost done ${user}\nYes or No...\nDo I believe that the movie "Con Air" is a cinematic masterpiece?`).toLowerCase();
if(questionFour === 'y' || questionFour === 'yes'){
  alert(`You are absolutely right ${user}, Con Air is an amazing film`);
} else if(questionFour === 'n' || questionFour === 'no'){
  alert('Sorry, you got this one wrong and I\'m going to have to ask you to put the bunny back in the box');
} else{
  alert ('Answer yes or no');
}

let questionFive = prompt(`Last question ${user}\nYes or No...\nSpeaking of airplanes have I ever jumped out of one?`).toLowerCase();
if(questionFive === 'y' || questionFive === 'yes'){
  alert(`Correct ${user}! I can say that I have taken off in more planes than I have landed in`);
} else if(questionFive === 'n' || questionFive === 'no'){
  alert('I actually have multiple jumps!');
} else{
  alert ('Answer yes or no');
}

alert(`Thanks for taking my quiz ${user}`);
