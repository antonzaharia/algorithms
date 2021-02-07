function tickets(peopleInLine) {
  let till = 0;
  const ticket = 25;
  let problem = false;
  peopleInLine.map((cash) => {
    let changeNeeded = cash - ticket;
    if (till - changeNeeded < 0) {
      problem = true;
    } else {
      till = till + 25 - changeNeeded;
    }
  });
  if (problem) {
    return "NO";
  } else {
    return "YES";
  }
}

module.exports = tickets;
