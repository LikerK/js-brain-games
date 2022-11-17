const maxNumber = 100;

export const task = 'Find the greatest common divisor of given numbers.';

const getNod = (x, y) => {
  if (y > x) return getNod(y, x);
  if (!y) return x;
  return getNod(y, x % y);
};

export const getRound = () => {
  const firstNumber = Math.trunc(Math.random() * maxNumber);
  const secondNumber = Math.trunc(Math.random() * maxNumber);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = getNod(firstNumber, secondNumber);
  return [question, String(answer)];
};
