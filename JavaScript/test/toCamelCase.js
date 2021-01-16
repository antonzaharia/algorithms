const assert = require("assert");
const toCamelCase = require("../toCamelCase.js");

describe("toCamelCase()", function () {
  it("should return an empty string if an empty string is given", function () {
    const test = toCamelCase("");
    assert.strictEqual("", test);
  });
  it("should remove regex", function () {
    const test = toCamelCase("A-B-C");
    assert.strictEqual("ABC", test);
  });
  it("should return a camel cased string with first letter lower cased", function () {
    const test = toCamelCase("the_stealth_warrior");
    assert.strictEqual("theStealthWarrior", test);
  });
  it("should return a camel cased string with first letter upper cased", function () {
    const test = toCamelCase("The-Stealth-Warrior");
    assert.strictEqual("TheStealthWarrior", test);
  });
});
