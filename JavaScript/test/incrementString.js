const assert = require("assert");
const incrementString = require("../incrementString");

describe("incrementString()", () => {
  it("should add the integer at the end of the string", () => {
    let test = incrementString("foo");
    assert.strictEqual(test, "foo1");
  });
  it("should add the integer at the end of the string", () => {
    let test = incrementString("");
    assert.strictEqual(test, "1");
  });
  it("should correctly increment the number", () => {
    let test = incrementString("foobar001");
    assert.strictEqual(test, "foobar002");
  });
  it("should correctly increment the number", () => {
    let test = incrementString("foobar99");
    assert.strictEqual(test, "foobar100");
  });
});
