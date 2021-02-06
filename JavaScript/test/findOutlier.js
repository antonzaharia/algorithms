const assert = require("assert");
const findOutlier = require("../findOutlier");

describe("findOutlier()", function () {
  it("should find any odd number from even numbers", function () {
    let test = findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);
    assert.strictEqual(test, 11);
  });
  it("should find any even number from odd numbers", function () {
    let test = findOutlier([160, 3, 1719, 19, 11, 13, -21]);
    assert.strictEqual(test, 160);
  });
});
