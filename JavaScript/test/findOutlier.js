const assert = require("assert");
const findOutlier = require("../findOutlier");

describe("findOutlier()", function () {
  it("should find any odd number from even numbers", function () {
    let test = findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]);
    assert.strictEqual(test, 11);
  });
  it("should find any even number from odd numbers", function () {
    let test = findOutlier([160, 3, 1719, 19, 11, 13, -21]);
    assert.strictEqual(test, 160);
  });
  it("should find any odd number from even numbers (complex 1)", function () {
    let test = findOutlier([
      13718284,
      28375510,
      48518052,
      17548014,
      53559532,
      65890878,
      -19336250,
      -55448708,
      94503876,
      192319604,
      -4648840,
      -145038206,
      -29459968,
      10978734,
      108246822,
      58890230,
      38937890,
      76816356,
      -86129752,
      -26805792,
      77205674,
      -72614632,
      -18020495,
      764352,
      134919320,
      47242620,
      -103066194,
      -173293136,
    ]);
    assert.strictEqual(test, -18020495);
  });
  it("should find any odd number from even numbers (complex 2)", function () {
    let test = findOutlier([
      -167484485,
      -38879950,
      171900634,
      -148992676,
      -41043178,
      -141062490,
      50535006,
      -152055950,
      -153897876,
    ]);
    assert.strictEqual(test, -167484485);
  });
});
