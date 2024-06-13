// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  inputEl: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

let intervalId;
// значення з інпута створює відлік з мінусовими значеннями
let userSelectedDate;

// таймер працює правильно
// const userSelectedDate = new Date('2024 06 13 20:23');

refs.startBtn.addEventListener('click', () => {
  intervalId = setInterval(() => {
    const currentDate = Date.now();
    const diff = userSelectedDate - currentDate;
    const time = convertMs(diff);

    refs.days.textContent = time.days.toString().padStart(2, '0');
    refs.hours.textContent = time.hours.toString().padStart(2, '0');
    refs.minutes.textContent = time.minutes.toString().padStart(2, '0');
    refs.seconds.textContent = time.seconds.toString().padStart(2, '0');
  }, 1000);

  refs.startBtn.disabled = true;
  refs.inputEl.disabled = true;
});

setTimeout(() => {
  clearInterval(intervalId);
}, userSelectedDate - Date.now());

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

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
function onClose() {
  let userSelectedDate = new Date(refs.inputEl.value);
  let currentTime = new Date();
  if (userSelectedDate < currentTime) {
    window.alert('Please choose a date in the future');
    refs.startBtn.disabled = true;
  }
}

flatpickr('#datetime-picker', options);
