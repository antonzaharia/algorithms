const assert = require("assert");
const tickets = require("../tickets.js");

describe("tickets()", function () {
  it("test", function () {
    let test = tickets("test");
    assert(test, "test");
  });
});
