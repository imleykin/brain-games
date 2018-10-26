import readlineSync from 'readline-sync';

const showWelcomeMessage = () => console.log('Welcome to the Brain Games! \n');

const getUserName = () => {
  const name = readlineSync.question('May I have your name: ');
  console.log(`Hello, ${name}! \n`);
  return name;
};

const getUserAnswer = () => readlineSync.question('Your answer: ');

const getRandomInteger = () => Math.floor(Math.random() * 100);

export {
  showWelcomeMessage, getUserName, getUserAnswer, getRandomInteger,
};
