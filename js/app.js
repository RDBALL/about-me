'use strict'

let userName = prompt('What name do you like to be called?');
alert('Hi, ' +userName+ '! It\'s nice to meet you!');      
console.log('The user\'s name is ' + userName);


let movieQuestion = prompt('Hi ' + userName + ' , first question. Is Con Air a cinematic masterpiece?');
  while (movieQuestion.toLowerCase() !== 'yes'){
    alert('Come on ' + userName + ' put the bunny back in the box and select the right answer');
    movieQuestion = prompt('Hi ' + userName + ' , first question. Is Con Air a cinematic masterpiece?');
  } if (movieQuestion.toLowerCase() === 'yes');
    alert('I completely agree ' + userName + ' Con Air is fantastic!');



// alert('Hi, ' +userName+ '! It\'s nice to meet you!');      
// console.log('The user\'s name is ' + userName)

// let userName = prompt('What name do you like to be called?');
// console.log('The user\'s name is ' + userName)

// let favMovie = prompt('What is your favorite movie?');
// console.log('The user\'s favorite movie is ' + favMovie)

// let favArtist = prompt('Who is your favorite musical artist?');
// console.log('The user\'s favorite musical artist is: ' + favArtist);

// let favHobby = prompt('What is your favorite hobby?');
// console.log('The user\'s favorite hobby is: ' + favHobby);

// alert('Hey ' + userName + '!\nI think it\'s awesome that your favorite movie is ' + favMovie + '. \n' + favArtist + ' is great.\nAnd ' + favHobby + '? don\'t get me started on how fun that is!');
