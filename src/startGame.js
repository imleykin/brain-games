import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const getUserName = () => {
  const name = readlineSync.question('May I have your name: ');
  console.log(`Hello, ${name}! \n`);
  return name;
};

const getUserAnswer = () => readlineSync.question('Your answer: ');

const startGame = (description, getGameRound) => {
  console.log('Welcome to the Brain Games! \n');
  console.log(`${description}\n`);
  const userName = getUserName();

  for (let currentRound = 1; currentRound <= numberOfRounds; currentRound += 1) {
    const { question, answer: correctAnswer } = getGameRound();
    console.log(question);
    const userAnswer = getUserAnswer();

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations,  ${userName}!`);
};

export default startGame;
