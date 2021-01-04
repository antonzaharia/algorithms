const assert = require("assert");
const order = require("../order.js");

describe("order()", function () {
  it("should return empty string if an empty string is given", function () {
    test = order("");
    assert.strictEqual("", test);
  });
  it("should return the words in correct order 1 ", function () {
    test = order("is2 Thi1s T4est 3a");
    assert.strictEqual("Thi1s is2 3a T4est", test);
  });
  it("should return the words in correct order 2 ", function () {
    test = order("4of Fo1r pe6ople g3ood th5e the2");
    assert.strictEqual("Fo1r the2 g3ood 4of th5e pe6ople", test);
  });
});
