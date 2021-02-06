const assert = require("assert");
const findOutlier = require("../findOutlier");

describe("findOutlier()", function () {
  it("test", function () {
    let test = findOutlier("test");
    assert.strictEqual(test, "test");
  });
});
