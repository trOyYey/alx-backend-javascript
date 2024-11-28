const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe("calculateNumber", function () {
  describe("SUM", function () {
    it("should return 4", function () {
      expect(calculateNumber("SUM", 2.2, 2.2)).to.equal(4);
    });
    it("should return 3", function () {
      expect(calculateNumber("SUM", 1.3, 2.4)).to.equal(3);
    });
    it("should return 4", function () {
      expect(calculateNumber("SUM", 1.5, 1.5)).to.equal(4);
    });
    it("should return 2", function () {
      expect(calculateNumber("SUM", 1.4, 0.9)).to.equal(2);
    });
    it("should return 5", function () {
      expect(calculateNumber("SUM", 1.9, 2.7)).to.equal(5);
    });
    it("should return 4", function () {
      expect(calculateNumber("SUM", 1.1, 3.2)).to.equal(4);
    });
    it("should return 4", function () {
      expect(calculateNumber("SUM", 1.99, 1.99)).to.equal(4);
    });
  });

  describe("SUBTRACT", function () {
    it("should return 0", function () {
      expect(calculateNumber("SUBTRACT", 0, 0)).to.equal(0);
    });
    it("should return 0", function () {
      expect(calculateNumber("SUBTRACT", 0.5, 0.5)).to.equal(0);
    });
    it("should return 1", function () {
      expect(calculateNumber("SUBTRACT", 0.5, 0.4)).to.equal(1);
    });
    it("should return 0", function () {
      expect(calculateNumber("SUBTRACT", 0.5, 0.5)).to.equal(0);
    });
    it("should return 1", function () {
      expect(calculateNumber("SUBTRACT", 1.7, 0.6)).to.equal(1);
    });
  });

  describe("DIVIDE", function () {
    it("should return Error", function () {
      expect(calculateNumber("DIVIDE", 0, 0)).to.equal("Error");
    });
    it("should return 0", function () {
      expect(calculateNumber("DIVIDE", 0.4, 0.5)).to.equal(0);
    });
    it("should return Error", function () {
      expect(calculateNumber("DIVIDE", 0.5, 0.4)).to.equal("Error");
    });
    it("should return 1", function () {
      expect(calculateNumber("DIVIDE", 0.5, 0.5)).to.equal(1);
    });
    it("should return 5", function () {
      expect(calculateNumber("DIVIDE", 10.3, 1.5)).to.equal(5);
    });
  });
});
