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
}

module.exports = formatDuration;
