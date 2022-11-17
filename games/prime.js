export const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const maxNumber = 100;

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  let i = 2;
  const limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

export const getRound = () => {
  const number = Math.trunc(Math.random() * maxNumber);
  const question = String(number);
  if (isPrime(number)) {
    return [question, 'yes'];
  }
  return [question, 'no'];
};
