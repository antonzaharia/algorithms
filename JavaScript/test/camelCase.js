const assert = require("assert");
const camelCase = require("../camelCase");

describe("cameCase()", function () {
  it("should return the string capitalized if there is only one word", function () {
    let test = "case".camelCase();
    assert.strictEqual(test, "Case");
  });
  it("should return the string in camel case form(2 words)", function () {
    let test = "test case".camelCase();
    assert.strictEqual(test, "TestCase");
  });
  it("should return the string in camel case form(3 words)", function () {
    let test = "camel case method".camelCase();
    assert.strictEqual(test, "CamelCaseMethod");
  });
  it("should remove the space from ending of the string", function () {
    let test = "camel case method ".camelCase();
    assert.strictEqual(test, "CamelCaseMethod");
  });
});
