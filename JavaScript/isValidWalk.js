function isValidWalk(walk) {
  let n = 0,
    s = 0,
    e = 0,
    w = 0;
  walk.map((direction) => {
    if (direction === "n") {
      n += 1;
    } else if (direction === "s") {
      s += 1;
    } else if (direction === "e") {
      e += 1;
    } else if (direction === "w") {
      w += 1;
    }
  });
  if (n === s && e === w && walk.length === 10) {
    return true;
  } else return false;
}
module.exports = isValidWalk;
