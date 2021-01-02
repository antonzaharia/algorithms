const assert = require("assert");
const openOrSenior = require("../openOrSenior.js");

describe("Function", function () {
  it("should return the correct type of member", function () {
    const test1 = openOrSenior([
      [45, 12],
      [55, 21],
      [19, -2],
      [104, 20],
    ]);
    assert.strictEqual(["Open", "Senior", "Open", "Senior"], test1);
  });
  it("should return the correct type of member 2", function () {
    const test2 = openOrSenior([
      [3, 12],
      [55, 1],
      [91, -2],
      [54, 23],
    ]);
    assert.strictEqual(["Open", "Open", "Open", "Open"], test2);
  });
  it("should return the correct type of member 3", function () {
    const test3 = openOrSenior([
      [59, 12],
      [55, -1],
      [12, -2],
      [12, 12],
    ]);
    assert.strictEqual(["Senior", "Open", "Open", "Open"], test3);
  });
});
