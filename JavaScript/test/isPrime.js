const assert = require("assert");
const isPrime = require("../isPrime");

describe("isPrime()", () => {
  it("should return false as 1 is not prime", () => {
    let test = isPrime(1);
    assert.strictEqual(test, false);
  });
  it("should return true as 2 is prime", () => {
    let test = isPrime(2);
    assert.strictEqual(test, true);
  });
  it("should return false as 75 is not prime", () => {
    let test = isPrime(75);
    assert.strictEqual(test, false);
  });
  it("should return false as -1 is not prime", () => {
    let test = isPrime(-1);
    assert.strictEqual(test, false);
  });
  it("should return true as 73 is prime", () => {
    let test = isPrime(73);
    assert.strictEqual(test, true);
  });
});
