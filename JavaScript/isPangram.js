function isPangram(string) {
  const abc = "abcdefghijklmnopqrstuvwxyz".split("");
  let arrayOfLetters = [].concat.apply(
    [],
    string.split(" ").map((word) => word.split(""))
  );
  let result = true;
  for (let i = 0; i < abc.length; i++) {
    if (!arrayOfLetters.find((l) => abc[i] === l.toLowerCase())) {
      result = false;
    }
  }
  return result;
}
module.exports = isPangram;
