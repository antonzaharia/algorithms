function threeAndFive(number) {
  let numbers = [];
  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      numbers.push(i);
    }
  }
  if (numbers.length > 1) {
    return numbers.reduce((n, memo) => memo + n);
  } else {
    return 0;
  }
}
module.exports = threeAndFive;
