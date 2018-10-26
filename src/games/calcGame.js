import { sample } from 'lodash';
import startGame from '../startGame';
import { getRandomInteger, getQuestionAndAnswer } from '..';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const getQuestion = () => {
  const firstNumber = getRandomInteger();
  const secondNumber = getRandomInteger();
  const operation = sample(Object.keys(operations));
  return `${firstNumber} ${operation} ${secondNumber}`;
};

const getCorrectAnswer = (expression) => {
  const [firstNumber, operation, secondNumber] = expression.split(' ');
  return operations[operation](+firstNumber, +secondNumber).toString();
};

export default () => startGame({
  description: 'What is the result of the expression?',
  getQuiz: () => getQuestionAndAnswer(getQuestion, getCorrectAnswer),
});
