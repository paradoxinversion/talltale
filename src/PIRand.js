const numbers = require("./numbers");
const names = require("./names");
const PIRand = function () {
  this.seed = "fakeTestSeed";

  this.numbers = numbers;
  this.names = names;
};

module.exports = PIRand;
