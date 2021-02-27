const assert = require("assert");
const add = require("../add");

describe("add()", () => {
  it("should return the sum of two strings", () => {
    let test = add("1", "1");
    assert.strictEqual(test, "2");
  });
  it("should return the sum of two strings 2", () => {
    let test = add("123", "456");
    assert.strictEqual(test, "579");
  });
  it("should return the sum of two strings 3", () => {
    let test = add("1372", "69");
    assert.strictEqual(test, "1441");
  });
});
