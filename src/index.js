import readlineSync from 'readline-sync';

function executor(game) {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(game.task);
  for (let i = 1; i <= 3; i += 1) {
    const [question, correctAnswer] = game.getRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(
        `'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}.
Let's try again, ${name}!`,
      );
    }
  }
  return console.log(`Congratulations, ${name}!`);
}

export default executor;
