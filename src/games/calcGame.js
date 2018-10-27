import { sample } from 'lodash';
import startGame from '../startGame';
import { getRandomInteger, MIN_NUM, MAX_NUM } from '../utils';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getGameRound = () => {
  const firstNumber = getRandomInteger(MIN_NUM, MAX_NUM);
  const secondNumber = getRandomInteger(MIN_NUM, MAX_NUM);
  const operation = sample(Object.keys(operations));
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  const answer = operations[operation](firstNumber, secondNumber).toString();
  return { question, answer };
};

export default () => startGame('What is the result of the expression?',
  getGameRound);
