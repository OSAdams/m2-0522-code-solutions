const takeAChance = require('./take-a-chance');

const returnValue = takeAChance('Who Dat');

returnValue.then(message => {
  console.log(message);
}).catch(error => {
  console.error(error.message);
});
