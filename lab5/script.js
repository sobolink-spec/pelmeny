const counter = document.getElementById('counter');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const reset = document.getElementById('reset');

let minutes = 0;
let seconds = 0;

function updateCounter() {
  counter.textContent = 
    `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

plus.addEventListener('click', () => {
  document.body.style.backgroundColor = 'lightcoral'; 
  counter.style.color = 'lightgreen'; 

  if (!timer) {
    timer = setInterval(() => {
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
      }
      updateCounter();
    }, 1000);
  }
});

minus.addEventListener('click', () => {
  document.body.style.backgroundColor = 'lightgreen'; 
  counter.style.color = 'lightcoral'; 
  if (seconds > 0 || minutes > 0) {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }
  }
  updateCounter();
});

reset.addEventListener('click', () => {
  document.body.style.backgroundColor = 'gray'; 
  counter.style.color = 'black'; 
  minutes = 0;
  seconds = 0;
  updateCounter();
});
