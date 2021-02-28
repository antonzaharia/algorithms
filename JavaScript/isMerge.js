function isMerge(s, part1, part2) {
  const complete = s.split("");
  p1 = [...part1];
  p2 = [...part2];
  let compose = [];
  for (let i = 0; i < complete.length; i++) {
    if (complete[i] === p1[0]) {
      p1.shift();
      compose.push(complete[i]);
    } else if (complete[i] === p2[0]) {
      p2.shift();
      compose.push(complete[i]);
    } else {
      return false;
    }
  }
  if (compose.join("") === s) {
    return true;
  } else {
    return false;
  }
}
module.exports = isMerge;
