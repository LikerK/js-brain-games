export const task = 'What is the result of the expression?';
const operations = ['+', '-', '*'];
const maxNumber = 100;

export const getRound = () => {
  const randomIndex = Math.floor(Math.random() * (operations.length));
  const firstNumber = Math.trunc(Math.random() * maxNumber);
  const secondNumber = Math.trunc(Math.random() * maxNumber);
  const operation = operations[randomIndex];
  let answer;
  let expression;
  if (operation === '+') {
    answer = firstNumber + secondNumber;
    expression = `${firstNumber} + ${secondNumber}`;
  } else if (operation === '-') {
    answer = firstNumber - secondNumber;
    expression = `${firstNumber} - ${secondNumber}`;
  } else {
    answer = firstNumber * secondNumber;
    expression = `${firstNumber} * ${secondNumber}`;
  }
  return [expression, String(answer)];
};
