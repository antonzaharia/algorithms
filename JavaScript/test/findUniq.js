const assert = require("assert");
const findUniq = require("../findUniq.js");

describe("findUniq()", function () {
  it("test", function () {
    test = findUniq("test");
    assert.strictEqual("test", test);
  });
});
