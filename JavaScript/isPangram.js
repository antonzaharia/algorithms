function isPangram(string) {
  const abc = "abcdefghijklmnopqrstuvwxyz".split("");
  let arrOfArrays = string.split(" ").map((word) => word.split(""));
  let arrayOfLetters = [].concat.apply([], arrOfArrays);
  let result = true;
  for (let i = 0; i < abc.length; i++) {
    if (!arrayOfLetters.find((l) => abc[i] === l.toLowerCase())) {
      result = false;
    }
  }
  return result;
}
module.exports = isPangram;
