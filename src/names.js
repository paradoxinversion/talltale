const mex = require("./data/lists/names/mex");
const ind = require("./data/lists/names/ind");
const numbers = require("./numbers");
const namesMap = {
  mex,
  ind,
};

/**
 * Takes an origin annd returns the givenNames matching it.
 * @param {*} origin
 */
const getFirstNamesByOrigin = (names, origin) => {
  return { [origin]: { givenNames: names[origin].givenNames } };
};

/**
 * Get given nMap of multiple origins.
 * @param {Array} origins
 */
const getFirstNamesByOrigins = (names, origins) => {
  const filteredNames = {};

  origins.forEach((origin) => {
    if (names[origin]) {
      filteredNames[origin] = { givenNames: names[origin].givenNames };
    }
  });
  return filteredNames;
};

const getFirstNamesByGender = (names, gender) => {
  const filteredNames = Object.keys(names).reduce((acc, curr) => {
    if (!acc.curr) acc[curr] = curr;
    acc[curr] = { givenNames: { [gender]: names[curr].givenNames[gender] } };

    return acc;
  }, {});
  return filteredNames;
};

const flattenNamesMap = (names) => {
  const allNames = Object.keys(names)
    .map((origin) => {
      const namesInOrigin = Object.keys(names[origin].givenNames).map(
        (namesGender) => names[origin].givenNames[namesGender]
      );

      return namesInOrigin;
    })
    .flat()
    .flat();
  return allNames;
};

const getFirstName = (names, origin, gender) => {
  let filteredNames = names;
  if (origin) {
    if (Array.isArray(origin)) {
      filteredNames = getFirstNamesByOrigins(filteredNames, origin);
    } else {
      debugger;
      filteredNames = getFirstNamesByOrigin(filteredNames, origin);
    }
  }

  if (gender) {
    filteredNames = getFirstNamesByGender(filteredNames, gender);
  }
  const namePool = flattenNamesMap(filteredNames);
  return namePool[numbers.numberBetweenExclusive(0, namePool.length)];
};

module.exports = {
  getFirstNamesByOrigin,
  getFirstNamesByOrigins,
  getFirstNamesByGender,
  getFirstName,
  flattenNamesMap,
  mex,
  ind,
  names: namesMap,
};
