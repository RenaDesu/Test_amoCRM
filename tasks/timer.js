const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const timerContainer = document.querySelector('.promo__timer-wrapper');

const DEADLINE_DATE = new Date(`December 10 2022 23:59:59`);


const updateTimer = () => {
const currentTime = new Date();
const diff = DEADLINE_DATE - currentTime;
const hoursLeft = Math.floor(diff / 1000 / 60 / 60); 
const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
const secondsLeft = Math.floor(diff / 1000) % 60;

hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;

if (diff <= 0) {
    clearInterval(timeinterval);
    timerContainer.innerHTML = 'Акция завершена';
  }
};

updateTimer();

const timeinterval = setInterval(updateTimer, 1000);