const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

// function twoDigits(time) {
//   return time < 10 ? `0${time}` : time
// }
twoDigits = (t) => t < 10 ? `0${t}` : t

function getTime() {
  const date = new Date();
  const hh = date.getHours();
  const mm = date.getMinutes();
  const ss = date.getSeconds();
  // clockTitle.innerText = `${hh < 10 ? `0${hh}` : hh}:${mm < 10 ? `0${mm}` : mm}:${ss < 10 ? `0${ss}` : ss}`;
  clockTitle.innerText = `${twoDigits(hh)}:${twoDigits(mm)}:${twoDigits(ss)}`;
}

function init() {
  setInterval(getTime, 1000)
}

init();