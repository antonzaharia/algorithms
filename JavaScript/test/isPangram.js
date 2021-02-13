const assert = require("assert");
const isPangram = require("../isPangram");

describe("isPangram()", () => {
  it("should return true if the string is a pangram", () => {
    let test = isPangram("The quick brown fox jumps over the lazy dog.");
    assert.strictEqual(test, true);
  });
  it("should return false if the string is not a pangram", () => {
    let test = isPangram("This is not a pangram.");
    assert.strictEqual(test, false);
  });
});
