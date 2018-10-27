import { sample } from 'lodash';
import startGame from '../startGame';
import getRandomInteger from '../getRandomInteger';

const gameDescription = 'What is the result of the expression?';
const minForRandom = 0;
const maxForRandom = 101;

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getGameRound = () => {
  const firstNumber = getRandomInteger(minForRandom, maxForRandom);
  const secondNumber = getRandomInteger(minForRandom, maxForRandom);
  const operation = sample(Object.keys(operations));
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const answer = operations[operation](firstNumber, secondNumber).toString();
  return { question, answer };
};

export default () => startGame(gameDescription, getGameRound);
