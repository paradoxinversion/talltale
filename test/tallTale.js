const TallTale = require("../src/TallTale");
const chai = require("chai");
const expect = chai.expect;
describe("PIRand", function () {
  it("Returns a random number", function () {
    const tallTale = new TallTale();
    expect(tallTale).to.haveOwnProperty("numbers");
    expect(tallTale.seed).to.have.length.gt(0);
  });
});
