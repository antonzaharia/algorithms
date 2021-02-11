const assert = require("assert");
const isPrime = require("../isPrime");

describe("isPrime()", () => {
  it("test", () => {
    let test = isPrime("test");
    assert.strictEqual(test, "test");
  });
});
