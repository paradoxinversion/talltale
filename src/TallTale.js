const numbers = require("./numbers");
const names = require("./names");

const TallTale = function () {
  this.seed = "fakeTestSeed";

  this.numbers = numbers;
  this.names = names;
};

module.exports = TallTale;
