const assert = require("assert");
const isValidWalk = require("../isValidWalk.js");

describe("isValidWalk()", function () {
  it("should return false if array length is smaller than 10 blocks", function () {
    const test = isValidWalk(["w"]);
    assert.strictEqual(false, test);
  });
  it("should return false if array length is bigger than 10 blocks", function () {
    const test = isValidWalk([
      "w",
      "e",
      "w",
      "e",
      "w",
      "e",
      "w",
      "e",
      "w",
      "e",
      "w",
      "e",
    ]);
    assert.strictEqual(false, test);
  });
  it("should return false if walk is not ending in tha same point", function () {
    test = isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]);
    assert.strictEqual(false, test);
  });
  it("should return true if array length equal 10 and ending point is the same as starting point", function () {
    test = isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]);
    assert.strictEqual(true, test);
  });
});
