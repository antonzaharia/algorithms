const assert = require("assert");

describe("threeAndFive", function () {
  beforeEach(function () {
    const multipleOf3 = threeAndFive(4);
    const multipleOf5 = threeAndFive(6);
  });
  it("should return only multiples of 3 or 5"),
    function () {
      expect(multipleOf3).to.equal(3);
      expect(multipleOf5).to.equal(14);
    };
});
