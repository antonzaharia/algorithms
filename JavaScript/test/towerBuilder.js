const assert = require("assert");
const towerBuilder = require("../towerBuilder");

describe("towerBuilder()", () => {
  it("test", () => {
    let test = towerBuilder("test");
    assert.strictEqual(test, "test");
  });
});
