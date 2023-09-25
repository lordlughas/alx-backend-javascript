// import readline module
const readline = require('readline');

// create interface for input and output
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// question user to enter name
r1.question('Welcome to Holberton School, what is your name?\n', (answer) => {
  console.log(`Your name is: ${answer}`);
  console.log('This important software is now closing');
  r1.close();
});
