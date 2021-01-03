const assert = require("assert");
const isValidWalk = require("../isValidWalk.js");

describe("isValidWalk()", function () {
  it("return true", function () {
    const test = isValidWalk("test");
    assert.strictEqual("test", test);
  });
});
