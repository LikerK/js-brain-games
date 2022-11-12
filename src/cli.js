import readlineSync from 'readline-sync';


const greeting_by_name = () => {
    const name = readlineSync.question('Your answer: ');
    console.log('Hello, ' + name + '!')
};

export default greeting_by_name