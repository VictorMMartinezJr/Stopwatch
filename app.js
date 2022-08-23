"use strict";

const stopwatchNumbers = document.querySelector(".stopwatch_numbers");
const btnStart = document.querySelector(".stopwatch_btn--start");
const btnPause = document.querySelector(".stopwatch_btn--pause");
const btnReset = document.querySelector(".stopwatch_btn--reset");

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval = null;

// Add extra 0 to number if below 10
const padNumber = (num) => {
  num = num < 10 ? "0" + num : num;
  return num;
};

const updateTimer = () => {
  seconds++;
  hours = Math.floor(seconds / 3600);
  minutes = Math.floor((seconds - hours * 3600) / 60);
  let sec = seconds % 60;
  stopwatchNumbers.textContent = `${padNumber(hours)}:${padNumber(
    minutes
  )}:${padNumber(sec)}`;
};
// Start Timer
const startTimer = () => {
  if (interval) return;

  interval = setInterval(updateTimer, 1000);
};
// Pause Timer
const pauseTimer = () => {
  clearInterval(interval);
  interval = null;
};
// Reset Timer
const resetTimer = () => {
  seconds = 0;
  minutes = 0;
  hours = 0;
  clearInterval(interval);
  interval = null;
  stopwatchNumbers.textContent = "00:00:00";
};

// Event Listeners
btnStart.addEventListener("click", startTimer);
btnPause.addEventListener("click", pauseTimer);
btnReset.addEventListener("click", resetTimer);
