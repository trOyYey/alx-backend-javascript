const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
    describe('SUM', function () {
        it('should return 2', function () {
            assert.strictEqual(calculateNumber('SUM', 0.7, 1.1), 2);
        });
        it('should return 3', function () {
            assert.strictEqual(calculateNumber('SUM', 0.7, 2.4), 3);
        });
        it('should return 4', function () {
            assert.strictEqual(calculateNumber('SUM', 1.9, 1.5), 4);
        });
        it('should return 2', function () {
            assert.strictEqual(calculateNumber('SUM', 1.3, 0.9), 2);
        });
        it('should return 5', function () {
            assert.strictEqual(calculateNumber('SUM', 1.7, 2.8), 5);
        });
        it('should return 4', function () {
            assert.strictEqual(calculateNumber('SUM', 1.1, 3.0), 4);
        });
        it('should return 4', function () {
            assert.strictEqual(calculateNumber('SUM', 1.99, 1.99), 4);
        });
    });

    describe('SUBTRACT', function () {
        it('should return 0', function () {
            assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
        });
        it('should return 1', function () {
            assert.strictEqual(calculateNumber('SUBTRACT', 0.5, 0.5), 0);
        });
        it('should return 1', function () {
            assert.strictEqual(calculateNumber('SUBTRACT', 0.5, 0.4), 1);
        });
        it('should return 0', function () {
            assert.strictEqual(calculateNumber('SUBTRACT', 0.5, 0.5), 0);
        });
        it('should return 0', function () {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 0.9), 1);
        });
    });

    describe('DIVIDE', function () {
        it('should return 0', function () {
            assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
        });
        it('should return 1', function () {
            assert.strictEqual(calculateNumber('DIVIDE', 0.3, 0.5), 0);
        });
        it('should return 1', function () {
            assert.strictEqual(calculateNumber('DIVIDE', 0.7, 0.4), 'Error');
        });
        it('should return 0', function () {
            assert.strictEqual(calculateNumber('DIVIDE', 0.9, 1), 1);
        });
        it('should return 0', function () {
            assert.strictEqual(calculateNumber('DIVIDE', 20, 3.5), 5);
        });
    });
})
