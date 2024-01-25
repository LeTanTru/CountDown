const $ = (x) => {
  return document.querySelector(x);
};

const daysEle = $(".days");
const hoursEle = $(".hours");
const minutesEle = $(".minutes");
const secondsEle = $(".seconds");

const comingDays = "1/27/2024";
const date = new Date();
const dateEnd = new Date(comingDays);
const difference = dateEnd.getTime() - date.getTime();
const days = Math.floor(difference / (1000 * 86400));
const hours = Math.floor(difference / (1000 * 3600) - days * 24);
const minutes = Math.floor(
  (difference / (1000 * 3600) - days * 24 - hours) * 60
);
const seconds = Math.floor(
  ((difference / (1000 * 3600) - days * 24 - hours) * 60 - minutes) * 60
);

const renderCountdownTime = (days, hours, minutes, seconds) => {
  daysEle.innerText = (days < 10 ? `0${days}` : days) + "d";
  hoursEle.innerText = (hours < 10 ? `0${hours}` : hours) + "h";
  minutesEle.innerText = (minutes < 10 ? `0${minutes}` : minutes) + "m";
  secondsEle.innerText = (seconds < 10 ? `0${seconds}` : seconds) + "s";
};

renderCountdownTime(days, hours, minutes, seconds);

setInterval(() => {
  const date = new Date();
  const dateEnd = new Date(comingDays);
  const difference = dateEnd.getTime() - date.getTime();
  const days = Math.floor(difference / (1000 * 86400));
  const hours = Math.floor(difference / (1000 * 3600) - days * 24);
  const minutes = Math.floor(
    (difference / (1000 * 3600) - days * 24 - hours) * 60
  );
  const seconds = Math.floor(
    ((difference / (1000 * 3600) - days * 24 - hours) * 60 - minutes) * 60
  );

  renderCountdownTime(days, hours, minutes, seconds);
}, 1000);

const randomColorCode = () => {
  return Math.floor(Math.random() * 1000);
};

const randomColor = () => {
  return `rgb(${randomColorCode()},${randomColorCode()},${randomColorCode()})`;
};

setInterval(() => {
  daysEle.style.color = randomColor();
  hoursEle.style.color = randomColor();
  minutesEle.style.color = randomColor();
  secondsEle.style.color = randomColor();
}, 500);
