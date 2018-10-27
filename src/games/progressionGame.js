import startGame from '../startGame';
import { getRandomInteger, MIN_NUM, MAX_NUM } from '../utils';

const PROGRESSION_LENGTH = 10;


const getGameRound = () => {
  const progressionStart = getRandomInteger(MIN_NUM, MAX_NUM);
  const progressionStep = getRandomInteger(MIN_NUM, MAX_NUM);
  const questionIndex = getRandomInteger(0, PROGRESSION_LENGTH);

  const progression = new Array(PROGRESSION_LENGTH)
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

export default () => startGame('What number is missing in this progression?',
  getGameRound);
