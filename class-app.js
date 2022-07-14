// 'use script';

// // Creating the question 6 and 7 from lab03 in class

// // Number guessing game

// // indicate through an alert if the guess is "too high"

// // alert too low

// //Guess right

// // Give user set amount of attempts to guess correct answer

// // for(let i = 0; i < 4; i++){
// //   let numGuess = prompt('Try and guess my number');
// //   if(+numGuess === myNum){
// //     alert('You are correct');
// //   } else if(numGuess > myNum){
// //     alert('Too high');
// //   } else if(numGuess < myNum){
// //     alert('Too low');
// //   }
// // }

// // // After all attempts have been exhausted, tell the correct answer

// // if(i === 3){
// //   alert('The answer was 30');
// // }

// let myNum = 30;

// for(let i = 0; i < 4; i++){
//   let numGuess = prompt('Try and guess my number');
//   if(+numGuess === myNum){
//     alert('You are correct');
//     break;
//   } else if(numGuess > myNum){
//     alert('Too high');
//   } else if(numGuess < myNum){
//     alert('Too low');
//   }
// }

// if(i === 3){
//   alert('The answer was 30');
// }


// // Question number seven array attempt

// let favMovies = ['the rock', 'con air', 'big trouble in little china', 'king arthur', 'lord of the rings trilogy', 'hackers', 'crimson tide', 'the hunt for red october'];

// // // setting conditions for correct guess
// // // I can't figure out how to stucture the array in the alert without using the .join() helper

// for(let i = 0; i<6; i++){//slow loop
//   let favMoviesGuess = prompt('Guess one of my fav movies').toLowerCase();

//   for(let j = 0; j < favMovies.length; j++){// fast loop
//     if(favMoviesGuess === favMovies[j]){
//       alert('That is right');
//       i = 6;
//       break;
//     }
//   }

// }

// alert('Your score is + scoreCount ');

// // let correctAnswer = false;
// // for (let i = 0; i < 6; i++) {
// //   if(correctAnswer){
// //     break;
// //   } else {
// //     let userMovieGuess = prompt('Guess one of my top 10 favorite movies, you have 6 chances to get this!').toLowerCase();
// //     for (let i = 0; i < favMovies.length; i++){
// //       if (favMovies[i] === userMovieGuess){
// //         alert(`That is one of my favorite movies ${user}, here is the whole list \n${favMovies}!`);
// //         score++;
// //         correctAnswer = true;
// //         break;
// //       }
// //     }
// //   }
// // }
