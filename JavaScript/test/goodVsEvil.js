const assert = require("assert");
const goodVsEvil = require("../goodVsEvil.js");

describe("goodVsEvil()", () => {
  it("evil should win", () => {
    let test = goodVsEvil("1 1 1 1 1 1", "1 1 1 1 1 1 1");
    assert.strictEqual(
      test,
      "Battle Result: Evil eradicates all trace of Good"
    );
  });
  it("good should win", () => {
    let test = goodVsEvil("0 0 0 0 0 10", "0 1 1 1 1 0 0");
    assert.strictEqual(test, "Battle Result: Good triumphs over Evil");
  });
  it("should be a tie", () => {
    let test = goodVsEvil("1 0 0 0 0 0", "1 0 0 0 0 0 0");
    assert.strictEqual(test, "Battle Result: No victor on this battle field");
  });
});
