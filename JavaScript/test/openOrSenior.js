const assert = require("assert");
const openOrSenior = require("../openOrSenior.js");

describe("Function", function () {
  it("test", function () {
    const test = openOrSenior("test");
    assert.strictEqual("data", test);
  });
});
