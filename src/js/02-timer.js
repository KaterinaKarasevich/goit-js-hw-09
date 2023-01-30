import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputPickerEl = document.querySelector("#datetime-picker");
console.log(inputPickerEl)
const startBtn = document.querySelector("[data-start]");
console.log(startBtn)
const dataDaysEl = document.querySelector("[data-days]");
const dataHoursEl = document.querySelector("[data-hours]");
const dataMinutesEl = document.querySelector("[data-minutes]");
const dataSecondsEl = document.querySelector("[data-seconds]");

startBtn.setAttribute("disabled", true);

let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
   
      if (selectedDates[0] <= new Date() ) {
        alert("Please choose a date in the future time") 
        return;
    } 
      startBtn.removeAttribute("disabled");
     
  },
};

flatpickr(inputPickerEl, options)


const onStartBtnClick = function () {
   timerId = setInterval(countDownTime, 1000);
   startBtn.setAttribute("disabled", true);
}

startBtn.addEventListener("click", onStartBtnClick);
  
const countDownTime = function () {

  const selectedDate = inputPickerEl.value;
  const newDate = new Date(selectedDate);
  const nowDate = Date.now();
  
  const ms = newDate - nowDate;
   
  const convertedDate = convertMs(ms);
  dataDaysEl.textContent = addLeadingZero(convertedDate.days);
  dataHoursEl.textContent = addLeadingZero(convertedDate.hours);
  dataMinutesEl.textContent = addLeadingZero(convertedDate.minutes);
  dataSecondsEl.textContent = addLeadingZero(convertedDate.seconds);

    if (ms < 1000) {
    stopInterval();  
   } 
}


function stopInterval() {
  clearInterval(timerId);
  }

function addLeadingZero(value) {
  if (value < 10) {
    return value.toString().padStart(2, "0");
  } else {
     return value.toString()
  }
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

