const timerDisplay = document.getElementById('timerDisplay');
const startTimerBtn = document.getElementById('startTimer');
const pauseTimerBtn = document.getElementById('pauseTimer');
const resetTimerBtn = document.getElementById('resetTimer');

const stopwatchDisplay = document.getElementById('stopwatchDisplay');
const startStopwatchBtn = document.getElementById('startStopwatch');
const pauseStopwatchBtn = document.getElementById('pauseStopwatch');
const resetStopwatchBtn = document.getElementById('resetStopwatch');

let timerInterval, stopwatchInterval;
let timerRunning = false, stopwatchRunning = false;
let timerTime = 0, stopwatchTime = 0;

function updateTimerDisplay() {
  const hours = Math.floor(timerTime / 3600);
  const minutes = Math.floor((timerTime % 3600) / 60);
  const seconds = timerTime % 60;
  timerDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateStopwatchDisplay() {
  const hours = Math.floor(stopwatchTime / 3600);
  const minutes = Math.floor((stopwatchTime % 3600) / 60);
  const seconds = stopwatchTime % 60;
  stopwatchDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

startTimerBtn.addEventListener('click', () => {
  if (!timerRunning) {
    timerRunning = true;
    timerInterval = setInterval(() => {
      timerTime++;
      updateTimerDisplay();
    }, 1000);
  }
});

pauseTimerBtn.addEventListener('click', () => {
  if (timerRunning) {
    clearInterval(timerInterval);
    timerRunning = false;
  }
});

resetTimerBtn.addEventListener('click', () => {
  clearInterval(timerInterval);
  timerRunning = false;
  timerTime = 0;
  updateTimerDisplay();
});

startStopwatchBtn.addEventListener('click', () => {
  if (!stopwatchRunning) {
    stopwatchRunning = true;
    stopwatchInterval = setInterval(() => {
      stopwatchTime++;
      updateStopwatchDisplay();
    }, 1000);
  }
});

pauseStopwatchBtn.addEventListener('click', () => {
  if (stopwatchRunning) {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
  }
});

resetStopwatchBtn.addEventListener('click', () => {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
  stopwatchTime = 0;
  updateStopwatchDisplay();
});

updateTimerDisplay();
updateStopwatchDisplay();
