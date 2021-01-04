function findUniq(arr) {
  let toReturn;
  for (let i = 0; i < arr.length; i++) {
    newArr = arr.filter((e) => arr.indexOf(e) !== i);
    if (!newArr.includes(arr[i])) {
      toReturn = arr[i];
    }
  }
  return toReturn;
}
module.exports = findUniq;
