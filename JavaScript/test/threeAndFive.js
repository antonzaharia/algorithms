const assert = require("assert");
const threeAndFive = require("../threeAndFive.js");

describe("Function", function () {
  it("should return only multiples of 3 or 5", function () {
    const multipleOf3 = threeAndFive(4);

    assert.strictEqual(3, multipleOf3);
  });
  it("should return the sum of all multiples of 3 and 5 between 0 and the given number - input given *6*", function () {
    const sumOfNumbers = threeAndFive(8);
    assert.strictEqual(14, sumOfNumbers);
  });
  it("should return the sum of all multiples of 3 and 5 between 0 and the given number - input given *10*", function () {
    const sumOfNumbers = threeAndFive(10);
    assert.strictEqual(23, sumOfNumbers);
  });
});
