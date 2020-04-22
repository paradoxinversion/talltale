const numbers = require("./numbers");
const { names } = require("./data/index");
const PIRand = function () {
  this.seed = "fakeTestSeed";

  this.numbers = numbers;
  this.names = names;
};

module.exports = PIRand;
