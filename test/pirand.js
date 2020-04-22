const PIRand = require("../PIRand");
const chai = require("chai");
const expect = chai.expect;
describe("PIRand", function () {
  it("Returns a random number", function () {
    const piRand = new PIRand();
    expect(piRand);
  });
});
