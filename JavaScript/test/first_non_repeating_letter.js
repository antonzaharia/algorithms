const assert = require("assert");
const first_non_repeating_letter = require("../first_non_repeating_letter.js");

describe("first_non_repeating_letter()", function () {
  it("test", function () {
    test = first_non_repeating_letter("test");
    assert.strictEqual(test, "test");
  });
});
