import startGame from '../startGame';
import { getRandomInteger, MIN_NUM, MAX_NUM } from '../utils';

const getGcd = (a, b) => (b ? getGcd(b, a % b) : Math.abs(a));

const getGameRound = () => {
  const firstNumber = getRandomInteger(MIN_NUM, MAX_NUM);
  const secondNumber = getRandomInteger(MIN_NUM, MAX_NUM);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = getGcd(firstNumber, secondNumber).toString();
  return { question, answer };
};

export default () => startGame('Find the greatest common divisor of given numbers.',
  getGameRound);
