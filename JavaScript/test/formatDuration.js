const assert = require("assert");
const formatDuration = require("../formatDuration.js");

describe("formatDuration()", () => {
  it("should return seconds if less than a minute", () => {
    let test = formatDuration(1);
    assert.strictEqual(test, "1 second");
  });
  it("should return minutes and seconds if more than a minute", () => {
    let test = formatDuration(62);
    assert.strictEqual(test, "1 minute and 2 seconds");
  });
  it("should return only minutes if 0 extra seconds", () => {
    let test = formatDuration(120);
    assert.strictEqual(test, "2 minutes");
  });
  it("should return only hours if 60 minutes", () => {
    let test = formatDuration(3600);
    assert.strictEqual(test, "1 hour");
  });
  it("should return hours minutes and seconds", () => {
    let test = formatDuration(3662);
    assert.strictEqual(test, "1 hour, 1 minute and 2 seconds");
  });
});
