import readlineSync from 'readline-sync';

const greetingByName = () => {
  const name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!`);
};

export default greetingByName;
