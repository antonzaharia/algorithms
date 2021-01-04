const assert = require("assert");
const order = require("../order.js");

describe("order()", function () {
  it("test", function () {
    test = order("test");

    assert.strictEqual("test", test);
  });
});
