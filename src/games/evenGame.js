import startGame from '../startGame';
import { getRandomInteger, getQuestionAndAnswer } from '..';

const getQuestion = () => getRandomInteger();
const getCorrectAnswer = num => (num % 2 === 0 ? 'yes' : 'no');

export default () => startGame({
  description: 'Answer "yes" if number even otherwise answer "no".',
  getQuiz: () => getQuestionAndAnswer(getQuestion, getCorrectAnswer),
});
