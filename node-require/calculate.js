const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const firstNumber = Number(process.argv[2]);
const secondNumber = Number(process.argv[4]);

function findOperand(string) {
  if (string === 'plus') {
    console.log('Result: ', add.add(firstNumber, secondNumber));
  } else if (string === 'minus') {
    console.log('Result: ', subtract.subtract(firstNumber, secondNumber));
  } else if (string === 'times') {
    console.log('Result: ', multiply.multiply(firstNumber, secondNumber));
  } else if (string === 'over') {
    console.log('Result: ', divide.divide(firstNumber, secondNumber));
  } else {
    console.log('Invalid Operation');
  }
}

findOperand(process.argv[3]);
