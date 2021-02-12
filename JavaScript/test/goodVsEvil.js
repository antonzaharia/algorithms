const assert = require("assert");
const goodVsEvil = require("../goodVsEvil.js");

describe("goodVsEvil()", () => {
  it("test", () => {
    let test = goodVsEvil("test");
    assert.strictEqual(test, "test");
  });
});
