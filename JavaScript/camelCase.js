String.prototype.camelCase = function () {
  let word = Array.from(this);
  if (word[word.length - 1] === " ") {
    word.splice(-1, 1);
  }
  output = [];
  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      output.push(word[i].toUpperCase());
    } else {
      if (word[i] === " " && i !== word.length) {
        output.push(word[i + 1].toUpperCase());
        i++;
      } else {
        output.push(word[i]);
      }
    }
  }
  return output.join("");
};
