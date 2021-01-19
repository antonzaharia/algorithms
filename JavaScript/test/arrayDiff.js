const assert = require("assert");
const arrayDiff = require("../arrayDiff");

describe("arrayDiff()", function () {
  it("test", function () {
    test = arrayDiff("test", "test");
    assert.strictEqual("test", test);
  });
});
