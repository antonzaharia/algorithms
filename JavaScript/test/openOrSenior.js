const assert = require("assert");
const openOrSenior = require("../openOrSenior.js");

describe("Function", function () {
  it("should return Open Open if age is lower than 55", function () {
    const test1 = openOrSenior([
      [45, 12],
      [22, 21],
      [19, -2],
      [22, 20],
    ]);
    assert.strictEqual("Open", test1[0]);
  });
  it("should return Senior if age is bigger than 55", function () {
    const test2 = openOrSenior([
      [3, 12],
      [55, 8],
      [91, -2],
      [54, 23],
    ]);
    assert.strictEqual("Senior", test2[1]);
  });
  it("should return the correct type of member 3", function () {
    const test3 = openOrSenior([
      [59, 12],
      [55, -1],
      [12, -2],
      [12, 12],
    ]);
    assert.strictEqual("Senior", test3[0]);
    assert.strictEqual("Open", test3[1]);
    assert.strictEqual("Open", test3[2]);
    assert.strictEqual("Open", test3[3]);
  });
});
