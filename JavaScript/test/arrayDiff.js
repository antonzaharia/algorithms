const assert = require("assert");
const arrayDiff = require("../arrayDiff");

describe("arrayDiff()", function () {
  it("should return first array if second array is empty", function () {
    test = arrayDiff([1, 2], []);
    assert.strictEqual([1, 2], test);
  });
  it("should return an empty array", function () {
    test = arrayDiff([], [4, 5, 6]);
    assert.strictEqual([1, 2], test);
  });
  it("should return only the elements that are not present in second array", function () {
    test = arrayDiff([3, 4], [3]);
    assert.strictEqual([4], test);
  });
  it("should return the elements from first array that are not present in second array", function () {
    test = arrayDiff([1, 2, 2, 3, 2, 4, 5, 3, 6], [2]);
    assert.strictEqual([1, 3, 4, 5, 6], test);
  });
});
