const assert = require("assert");

describe("threeAndFive", function () {
  describe("Multiples of 3 and 5", function () {
    it("should return only multiples of 3 or 5"),
      function () {
        const multipleOf3 = threeAndFive(4);
        const multipleOf5 = threeAndFive(6);

        expect(multipleOf3).to.equal(3);
        expect(multipleOf5).to.equal(14);
      };
  });
});
