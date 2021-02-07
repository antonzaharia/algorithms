const assert = require("assert");
const tickets = require("../tickets.js");

describe("tickets()", function () {
  it("should test if no change needed", function () {
    let test = tickets([25]);
    assert.strictEqual(test, "YES");
  });
  it("should return NO if change is needed at first sale", function () {
    let test = tickets([50]);
    assert.strictEqual(test, "NO");
  });
  it("should return YES if enough change is available", function () {
    let test = tickets([25, 25, 50, 50]);
    assert.strictEqual(test, "YES");
  });
  it("should return NO if not enough change is available", function () {
    let test = tickets([25, 25, 50, 50, 100]);
    assert.strictEqual(test, "NO");
  });
});
