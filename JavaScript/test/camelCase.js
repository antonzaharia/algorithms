const assert = require("assert");
const camelCase = require("../camelCase");

describe("cameCase()", function () {
  it("test", function () {
    let test = "test".camelCase();
    assert.strictEqual(test, "test");
  });
});
