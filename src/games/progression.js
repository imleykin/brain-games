import startGame from '../startGame';
import getRandomInteger from '../getRandomInteger';

const gameDescription = 'What number is missing in this progression?';
const progressionLength = 10;
const minForRandom = 0;
const maxForRandom = 101;

const getGameRound = () => {
  const progressionStart = getRandomInteger(minForRandom, maxForRandom);
  const progressionStep = getRandomInteger(minForRandom, maxForRandom);
  const questionIndex = getRandomInteger(0, progressionLength);

  const progression = new Array(progressionLength)
    .fill(progressionStart)
    .map((value, index) => value + progressionStep * index);

  /*
    Так нормально собирать question? Просто думал, как это сделать без мутаций
    и в декларативном стиле. Встроенного метода в js нет, который бы просто вернул
    новый массив с измененным значением по индексу. Пишу тут, чтоб не вставлять код
    в обсуждения. Спасибо!
  */
  const question = [...progression.slice(0, questionIndex), '..', ...progression.slice(questionIndex + 1, progression.length)].join(' ');
  const answer = progression[questionIndex].toString();

  return { question, answer };
};

export default () => startGame(gameDescription, getGameRound);
