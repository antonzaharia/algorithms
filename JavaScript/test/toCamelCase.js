const assert = require("assert");
const toCamelCase = require("../toCamelCase.js");

describe("toCamelCase()", function () {
  it("should test", function () {
    const test = toCamelCase("test");
    assert.strictEqual("test", test);
  });
});
