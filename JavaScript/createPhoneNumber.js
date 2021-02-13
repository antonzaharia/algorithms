function createPhoneNumber(numbers) {
  let output = [];

  for (let i = 0; i < numbers.length; i++) {
    if (output.length === 0) {
      output.push("(");
    } else if (output.length === 4) {
      output.push(") ");
    } else if (output.length === 8) {
      output.push("-");
    }
    output.push(numbers[i]);
  }
  return output.join("");
}
module.exports = createPhoneNumber;
