const mex = require("./mex");
const ind = require("./ind");
const numbers = require("../../../numbers");
const namesMap = {
  mex,
  ind,
};

/**
 * Takes an origin annd returns the givenNames matching it.
 * @param {*} origin
 */
const getFirstNamesByOrigin = (origin) => {
  return { givenNames: namesMap[origin].givenNames };
};

/**
 * Get given names of multiple origins.
 * @param {Array} origins
 */
const getFirstNamesByOrigins = (origins) => {
  const names = {};
  origins.forEach((origin) => {
    if (namesMap[origin]) {
      names[origin] = getFirstNamesByOrigin(origin);
    }
  });
  return names;
};

const getFirstName = (origin, gender) => {
  let namePool;
  if (!origin) {
    namePool = Object.values(namesMap).reduce((acc, obj) => {
      const n = Object.values(obj.givenNames).flat();
      acc = acc.concat(n);
      return acc;
    }, []);
  } else {
    const test = getFirstNamesByOrigins(["ind", "mex"]);
    debugger;
    if (gender) namePool = Object.values(namesMap[origin].givenNames).flat();
  }

  return namePool[numbers.numberBetweenExclusive(0, namePool.length)];
};

module.exports = {
  getFirstName,
  mex,
  ind,
};
