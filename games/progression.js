const maxNumber = 100;
const maxLengthProgression = 10;
const minLengthProgression = 5;
const maxStep = 20;
export const task = 'What number is missing in the progression?';

const getProgression = () => {
  const progression = [];
  const progressionLegth = Math.trunc(Math.random() * (
    maxLengthProgression - minLengthProgression) + minLengthProgression);
  const step = Math.trunc(Math.random() * maxStep);
  let minNumberProgression = Math.trunc(Math.random() * maxNumber);

  for (let i = 1; i < progressionLegth; i += 1) {
    progression.push(String(minNumberProgression));
    minNumberProgression += step;
  }
  return progression;
};

export const getRound = () => {
  const progression = getProgression();
  const randomIndex = Math.trunc(Math.random() * progression.length);
  const answer = progression[randomIndex];
  progression[randomIndex] = '..';
  return [progression.join(' '), answer];
};
