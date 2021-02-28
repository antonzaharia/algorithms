const assert = require("assert");
const isMerge = require("../isMerge");

describe("isMerge()", () => {
  it("should return true if part1 and part2 builds s", () => {
    let test = isMerge("codewars", "code", "wars");
    assert.strictEqual(test, true);
  });
  it("should return true if part1 and part2 builds s", () => {
    let test = isMerge("codewars", "cdw", "oears");
    assert.strictEqual(test, true);
  });
  it("should return false if words are not merging", () => {
    let test = isMerge("codewars", "cod", "wars");
    assert.strictEqual(test, false);
  });
});
