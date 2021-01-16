function toCamelCase(str) {
  arr = str.split(/[.,\_/ -]/);
  output = arr.map((word) => {
    if (word.length > 0 && arr.indexOf(word) > 0) {
      let firstLetter = word.split("")[0];
      let restOfWord = word.split("").filter((l) => l != firstLetter);
      return `${firstLetter.toUpperCase()}${restOfWord.join("")}`;
    } else {
      return word;
    }
  });
  return output.join("");
}
module.exports = toCamelCase;
