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
  return `${hours} hours ${minutes} minutes ${s} seconds`;
}

module.exports = formatDuration;
