const assert = require("assert");
const tickets = require("../tickets.js");

describe("tickets()", function () {
  it("should test if no change needed", function () {
    let test = tickets([25]);
    assert(test, "YES");
  });
  it("should return NO if change is needed at first sale", function () {
    let test = tickets([50]);
    assert(test, "NO");
  });
});
