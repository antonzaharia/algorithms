function findOutlier(integers) {
  let even = [];
  let odd = [];
  integers.map((integer) => {
    if (integer % 2 === 0) {
      even.push(integer);
    } else {
      odd.push(integer);
    }
  });
  if (even.length === 1) {
    return even[0];
  } else {
    return odd[0];
  }
}
module.exports = findOutlier;
