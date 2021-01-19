function arrayDiff(a, b) {
  let output = [];
  a.forEach((element) => {
    if (!b.includes(element)) {
      output.push(element);
    }
  });
  return output;
}
module.exports = arrayDiff;
