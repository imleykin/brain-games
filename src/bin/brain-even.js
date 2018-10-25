#!/usr/bin/env node
import { showWelcomeMessage, getUserName, getUserAnswer } from '..';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getCorrectAnswer = num => (num % 2 === 0 ? 'yes' : 'no');

const startGuessParityGame = (userName) => {
  const NUMBER_OF_ROUNDS = 3;
  const MIN_NUMBER = 1;
  const MAX_NUMBER = 100;

  for (let currentRound = 1; currentRound <= NUMBER_OF_ROUNDS; currentRound += 1) {
    const randomInt = getRandomInt(MAX_NUMBER, MIN_NUMBER);
    console.log(randomInt);

    const userAnswer = getUserAnswer();
    const correctAnswer = getCorrectAnswer(randomInt);

    if (!(correctAnswer === userAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations,  ${userName}!`);
};

showWelcomeMessage();
const name = getUserName();
startGuessParityGame(name);
