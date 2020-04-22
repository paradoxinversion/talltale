const seedrandom = require("seedrandom");
const rng = seedrandom();
const NUMBER_MAX = 1000000;

/**
 * Return a random number
 */
const number = () => {
  return Math.floor(rng() * NUMBER_MAX);
};

const numberBetweenExclusive = (min, max) => {
  return Math.floor(rng() * (max - min)) + min;
};

const numberBetweenInclusive = (min, max) => {
  return Math.floor(rng() * (max - min)) + min;
};

const numberBelow = (max) => {
  return Math.floor(rng() * max);
};

module.exports = {
  number,
  numberBelow,
  numberBetweenExclusive,
  numberBetweenInclusive,
};
