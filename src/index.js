import readlineSync from 'readline-sync';

const showWelcomeMessage = () => console.log('Welcome to the Brain Games! \n');

const getUserName = () => {
  const name = readlineSync.question('May I have your name: ');
  console.log(`Hello, ${name}! \n`);
  return name;
};

export default getUserName;
const getUserAnswer = () => readlineSync.question('Your answer: ');
