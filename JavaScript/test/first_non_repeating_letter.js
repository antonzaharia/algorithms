const assert = require("assert");
const first_non_repeating_letter = require("../first_non_repeating_letter.js");

describe("first_non_repeating_letter()", function () {
  it("should return an empty string if an empty string is passed", function () {
    test = first_non_repeating_letter("");
    assert.strictEqual(test, "");
  });
  it("should return first letter if none are repeating", function () {
    test = first_non_repeating_letter("a");
    assert.strictEqual(test, "a");
  });
  it("should return first non repeating letter (only one repeating)", function () {
    test = first_non_repeating_letter("stress");
    assert.strictEqual(test, "t");
  });
  it("should return first non repeating letter (one not repeating)", function () {
    test = first_non_repeating_letter("moonmen");
    assert.strictEqual(test, "e");
  });
  it("should handle letter cases", function () {
    test = first_non_repeating_letter("eEt");
    assert.strictEqual(test, "t");
  });
});
