function goodVsEvil(good, evil) {
  let goodScore = good
    .split(" ")
    .reduce((a, b) => parseInt(a) + parseInt(b), 0);
  let evilScore = evil
    .split(" ")
    .reduce((a, b) => parseInt(a) + parseInt(b), 0);
  if (goodScore > evilScore) {
    return "Battle Result: Good triumphs over Evil";
  } else if (evilScore > goodScore) {
    return "Battle Result: Evil eradicates all trace of Good";
  } else if (evilScore === goodScore) {
    return "Battle Result: No victor on this battle field";
  }
}
module.exports = goodVsEvil;
