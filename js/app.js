'use strict';

var currentScore = 0;
var scorePossible = 0;

var correctAnswer = function(questionNumber) {
  currentScore++;
  scorePossible++;
  alert('Correct! You have guessed ' + currentScore + ' out of ' + scorePossible + ' answers correctly');
  console.log('Question ' + questionNumber + ': Correct');
}

var incorrectAnswer = function(questionNumber) {
  scorePossible++;
  alert('Incorrect! You have guessed ' + currentScore + ' out of ' + scorePossible + ' answers correctly');
  console.log('Question ' + questionNumber + ': Incorrect');
}
 
var questionOne = prompt('Am I over 6\'2"?');
if(questionOne.toUpperCase() === "YES" || questionOne.toUpperCase() === "Y"){
  correctAnswer(1);
}
else {
  incorrectAnswer(1);
}

var questionTwo = prompt('Do I play video games?')
if(questionTwo.toUpperCase() === "YES" || questionTwo.toUpperCase() === "Y"){
  correctAnswer(2);
}
else {
  incorrectAnswer(2);
}

var questionThree = prompt('Am I over the age of 25?')
if(questionThree.toUpperCase() === "NO" || questionThree.toUpperCase() === "N"){
  correctAnswer(3);
}
else {
  incorrectAnswer(3);
}