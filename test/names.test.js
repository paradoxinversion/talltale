const names = require("../src/names");
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

const testDataPartial = {
  ind: {
    givenNames: { feminine: ["Aahna"] },
  },
  mex: {
    givenNames: { feminine: ["Alina"] },
  },
};

describe("Names", function () {
  describe("getFirstNamesByOrigin", function () {
    it("gets by origin", function () {
      const filteredNames = names.getFirstNamesByOrigin(testData, "ind");
      expect(filteredNames).to.eql({
        ind: { givenNames: { masculine: ["Abhay"], feminine: ["Aahna"] } },
      });
    });
  });

  describe("getFirstNamesByOrigins", function () {
    it("gets by origins", function () {
      const filteredNames = names.getFirstNamesByOrigins(testData, [
        "ind",
        "mex",
      ]);
      expect(filteredNames).to.eql({
        ind: {
          givenNames: { masculine: ["Abhay"], feminine: ["Aahna"] },
        },
        mex: {
          givenNames: { masculine: ["Antonio"], feminine: ["Alina"] },
        },
      });
    });
  });

  describe("getFirstNamesByOrigins", function () {
    it("gets by origins", function () {
      const femFilter = names.getFirstNamesByGender(testData, "feminine");
      const mascFilter = names.getFirstNamesByGender(testData, "masculine");
      expect(femFilter).to.eql({
        ind: {
          givenNames: { feminine: ["Aahna"] },
        },
        mex: {
          givenNames: { feminine: ["Alina"] },
        },
      });
      expect(mascFilter).to.eql({
        ind: {
          givenNames: { masculine: ["Abhay"] },
        },
        mex: {
          givenNames: { masculine: ["Antonio"] },
        },
      });
    });
  });

  describe("flattenNamesMap", function () {
    it("returns an array of all names in a map", function () {
      const allNames = names.flattenNamesMap(testData);
      const filteredNames = names.flattenNamesMap(testDataPartial);
      expect(allNames).to.include.members([
        "Aahna",
        "Abhay",
        "Antonio",
        "Alina",
      ]);
      expect(filteredNames).to.include.members(["Aahna", "Alina"]);
      expect(filteredNames).to.not.include.members(["Abhay", "Antonio"]);
    });
  });

  describe("getFirstName", function () {
    it("rreturs a ame based on params", function () {
      const name = names.getFirstName(testData);
      expect(name).to.be.oneOf(["Aahna", "Abhay", "Antonio", "Alina"]);
    });
    it("rreturs a ame based on specific params", function () {
      const name = names.getFirstName(testData, "ind", "feminine");
      expect(name).to.eql("Aahna");
    });
  });
});
