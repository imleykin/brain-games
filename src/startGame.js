import { showWelcomeMessage, getUserName, getUserAnswer } from '.';

const startGame = (game, numberOfRounds = 3) => {
  const { description, getQuiz } = game;

  showWelcomeMessage();
  console.log(`${description}\n`);
  const userName = getUserName();

  for (let currentRound = 1; currentRound <= numberOfRounds; currentRound += 1) {
    const { question, answer: correctAnswer } = getQuiz();
    console.log(question);
    const userAnswer = getUserAnswer();

    if (!(correctAnswer === userAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations,  ${userName}!`);
};

export default startGame;
