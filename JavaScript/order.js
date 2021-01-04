function order(words) {
  toReturn = [];
  array = words.split(" ");
  for (let i = 0; i < array.length; i++) {
    let word = array.find((word) => word.includes(i + 1));
    toReturn.push(word);
  }
  return toReturn.join(" ");
}
module.exports = order;
