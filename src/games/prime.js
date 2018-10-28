import startGame from '../startGame';
import getRandomInteger from '../getRandomInteger';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minForRandom = 0;
const maxForRandom = 101;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const getGameRound = () => {
  const question = getRandomInteger(minForRandom, maxForRandom);
  const answer = isPrime(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => startGame(gameDescription, getGameRound);
