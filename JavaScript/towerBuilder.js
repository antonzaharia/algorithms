function towerBuilder(nFloors) {
  let output = [];
  const setNumberOfStars = (index) => index * 2 + 1;

  for (let i = 0; i < nFloors; i++) {
    let stars = setNumberOfStars(i);
    let space = (setNumberOfStars(nFloors - 1) - stars) / 2;
    output.push(`${" ".repeat(space)}${"*".repeat(stars)}${" ".repeat(space)}`);
  }
  return output;
}
module.exports = towerBuilder;
