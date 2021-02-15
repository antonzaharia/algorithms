const assert = require("assert");
const formatDuration = require("../formatDuration.js");

describe("formatDuration()", () => {
  it("test", () => {
    let test = formatDuration("test");
    assert.strictEqual(test, "test");
  });
});
