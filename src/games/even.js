import startGame from '../startGame';
import { getRandomInteger } from '../utils';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const minForRandom = 0;
const maxForRandom = 101;

const isEven = num => num % 2 === 0;

const getGameRound = () => {
  const question = getRandomInteger(minForRandom, maxForRandom);
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => startGame(gameDescription, getGameRound);
