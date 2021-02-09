function incrementString(string) {
  const array = string.split(/(?=\d+)/);
  let s = array.find((e) => typeof e === "string" || e instanceof String);
  let numArray = array.filter((e) => e !== s);

  let zeros = [];
  let index = 0;
  for (let i = 0; i < numArray.length; i++) {
    if (parseInt(numArray[i]) === 0) {
      index = i;
      zeros.push("0");
    } else {
      index = i;
      break;
    }
  }
  let num = parseInt(numArray.splice(index, numArray.length).join("")) + 1;
  return `${s}${zeros.length > 0 ? zeros.join("") : ""}${num ? num : 1}`;
}
module.exports = incrementString;
