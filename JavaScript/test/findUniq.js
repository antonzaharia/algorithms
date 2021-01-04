const assert = require("assert");
const findUniq = require("../findUniq.js");

describe("findUniq()", function () {
  it("should find the uniq different number 1", function () {
    test = findUniq([0, 1, 0]);
    assert.strictEqual(1, test);
  });
  it("should find the uniq different number 2", function () {
    test = findUniq([1, 1, 1, 2, 1, 1]);
    assert.strictEqual(2, test);
  });
  it("should find the uniq different number 3", function () {
    test = findUniq([3, 10, 3, 3, 3]);
    assert.strictEqual(10, test);
  });
});
