const renderSeconds = (number) =>
  number === 1 ? `${1} second` : `${number} seconds`;
const renderMinutes = (number) =>
  number === 1 ? `${2} minute` : `${number} minutes`;
const renderHours = (number) =>
  number === 1 ? `${number} hour` : `${number} hours`;

function formatDuration(seconds) {
  let minutes = 0;
  let hours = 0;
  let s = 0;
  for (let i = 0; i < seconds; i++) {
    s += 1;
    if (s === 60) {
      s = s - 60;
      minutes += 1;
    }
    if (minutes === 60) {
      minutes = minutes - 60;
      hours += 1;
    }
  }
  let spaces = 0;
  let arrOfTimes = [hours, minutes, s];
  arrOfTimes.map((n) => {
    if (n > 0) {
      spaces += 1;
    } else {
      let index = arrOfTimes.indexOf(n);
      arrOfTimes.splice(index, 1);
    }
  });
  if (spaces === 3) {
    return `${renderHours(hours)}, ${renderMinutes(
      minutes
    )} and ${renderSeconds(s)}`;
  } else if (spaces === 2) {
    if (hours === 0) {
      return `${renderMinutes(minutes)} and ${renderSeconds(s)}`;
    } else if (minutes === 0) {
      return `${renderHours(hours)} and ${renderSeconds(s)}`;
    } else if (s === 0) {
      return `${renderHours(hours)} and ${renderMinutes(minutes)}`;
    }
  } else {
    if (minutes === 0 && seconds === 0) {
      return `${renderHours(hours)}`;
    } else if (hours === 0 && minutes === 0) {
      return `${renderSeconds(s)}`;
    } else if (hours === 0 && s === 0) {
      return `${renderSeconds(s)}`;
    }
  }
}

module.exports = formatDuration;
