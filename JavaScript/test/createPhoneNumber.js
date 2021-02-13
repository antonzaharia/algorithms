const assert = require("assert");
const createPhoneNumber = require("../createPhoneNumber");

describe("createPhoneNumber()", () => {
  it("should return the phone number test 1", () => {
    let test = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    assert.strictEqual(test, "(123) 456-7890");
  });
  it("should return the phone number test 1", () => {
    let test = createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    assert.strictEqual(test, "(111) 111-1111");
  });
  it("should return the phone number test 1", () => {
    let test = createPhoneNumber([9, 2, 3, 4, 2, 6, 7, 8, 7, 0]);
    assert.strictEqual(test, "(923) 426-7870");
  });
});
