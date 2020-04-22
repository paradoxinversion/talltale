const numbers = require("../numbers");
const chai = require("chai");
const expect = chai.expect;
describe("Numbers", function () {
  describe("number", function () {
    it("Returns a random number", function () {
      expect(numbers.number()).to.be.a("number");
    });
  });

  describe("numberBetweenExclusive", function () {
    it("Returns a random number", function () {
      const num = numbers.numberBetweenExclusive(5, 7);
      console.log("n", num);
      expect(num).to.be.a("number");
      expect(num);
    });
  });
});
