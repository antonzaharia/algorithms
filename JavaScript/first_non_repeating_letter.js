function first_non_repeating_letter(str) {
  const getCount = (arr, letter) => {
    let count = 0;
    arr.forEach((l) => l === letter && count++);
    return count;
  };

  if (str.length > 0) {
    output = [];
    str.split("").map((l) => {
      if (getCount(str.split(""), l) <= 1) {
        output.push(l);
      }
    });
    return output[0];
  } else {
    return "";
  }
}
module.exports = first_non_repeating_letter;
