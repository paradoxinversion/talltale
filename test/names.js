const { names } = require("../data/index");
const chai = require("chai");
const expect = chai.expect;

const testData = {
  ind: {
    givenNames: { masculine: ["Abhay"], feminine: ["Aahna"] },
  },
  mex: {
    givenNames: { masculine: ["Antonio"], feminine: ["Alina"] },
  },
};
describe("Names", function () {
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
