import startGame from '../startGame';
import { getRandomInteger } from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const minForRandom = 0;
const maxForRandom = 101;

const getGcd = (a, b) => (b ? getGcd(b, a % b) : Math.abs(a));

const getGameRound = () => {
  const firstNumber = getRandomInteger(minForRandom, maxForRandom);
  const secondNumber = getRandomInteger(minForRandom, maxForRandom);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGcd(firstNumber, secondNumber).toString();
  return { question, answer };
};

export default () => startGame(gameDescription, getGameRound);
