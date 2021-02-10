const assert = require("assert");
const towerBuilder = require("../towerBuilder");

describe("towerBuilder()", () => {
  it("should correctly build a tower with one floor", () => {
    let test = towerBuilder(1);
    assert.deepStrictEqual(test, ["*"]);
  });
  it("should correctly build a tower with two floors", () => {
    let test1 = towerBuilder(2);
    assert.deepStrictEqual(test1, [" * ", "***"]);
  });
  it("should correctly build a tower with three floors", () => {
    let test2 = towerBuilder(3);
    assert.deepStrictEqual(test2, ["  *  ", " *** ", "*****"]);
  });
});
