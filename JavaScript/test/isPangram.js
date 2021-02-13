const assert = require("assert");
const isPangram = require("../isPangram");

describe("isPangram()", () => {
  it("test", () => {
    let test = isPangram("test");
    assert.strictEqual(test, "test");
  });
});
