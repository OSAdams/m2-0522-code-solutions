const countdownDisplay = document.querySelector('.countdown-display');

let countdown = 4;

const intervalID = setInterval(updateTextContent, 1000);

function updateTextContent() {
  countdown--;
  countdownDisplay.textContent = countdown;
  if (countdown === 0) {
    countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
}
