const assert = require("assert");
const createPhoneNumber = require("../createPhoneNumber");

describe("createPhoneNumber()", () => {
  it("test", () => {
    let test = createPhoneNumber("test");
    assert.strictEqual(test, "test");
  });
});
