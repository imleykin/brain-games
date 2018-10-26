import startGame from '../startGame';
import { getRandomInteger } from '..';

const getQuestion = () => getRandomInteger();
const getCorrectAnswer = num => (num % 2 === 0 ? 'yes' : 'no');

const evenGame = () => ({
  description: 'Answer "yes" if number even otherwise answer "no".',
  getQuiz: () => {
    const question = getQuestion();
    const answer = getCorrectAnswer(question);
    return { question, answer };
  },
});

export default () => startGame(evenGame());
