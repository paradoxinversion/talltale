const PIRand = require("../src/PIRand");
const chai = require("chai");
const expect = chai.expect;
describe("PIRand", function () {
  it("Returns a random number", function () {
    const piRand = new PIRand();
    expect(piRand).to.haveOwnProperty("numbers");
    expect(piRand.seed).to.have.length.gt(0);
  });
});
