const assert = require("assert");
const add = require("../add");

describe("add()", () => {
  it("test", () => {
    let test = add("test");
    assert.strictEqual(test, "test");
  });
});
