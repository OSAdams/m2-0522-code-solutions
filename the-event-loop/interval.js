let counter = 3;

const shuttleCountdown = setInterval(() => {
  if (counter !== 0) {
    console.log(counter);
  } else if (counter === 0) {
    console.log('Blast off!');
    clearInterval(shuttleCountdown);
  }
  counter--;
}, 1000);
