import startGame from '../startGame';
import { getRandomInteger, MIN_NUM, MAX_NUM } from '../utils';

const isEven = num => num % 2 === 0;

const getGameRound = () => {
  const question = getRandomInteger(MIN_NUM, MAX_NUM);
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => startGame('Answer "yes" if number even otherwise answer "no".',
  getGameRound);
