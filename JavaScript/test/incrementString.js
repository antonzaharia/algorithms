const assert = require("assert");
const incrementString = require("../incrementString");

describe("incrementString()", () => {
  it("test", () => {
    let test = incrementString("test");
    assert.strictEqual(test, "test");
  });
});
