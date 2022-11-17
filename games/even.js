const maxNumber = 100;

export const task = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getRound = () => {
  const num = Math.trunc(Math.random() * maxNumber);
  if ((num) % 2 === 0) {
    return [num, 'yes'];
  }
  return [num, 'no'];
};
