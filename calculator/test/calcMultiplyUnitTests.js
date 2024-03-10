import { assert } from 'chai';
import { Calculator } from '../calculator.js';

const calculator = new Calculator();

describe('multiplying', function () {
  describe('multiplying one value', function () {
    [5, -2, 0, 0.35].forEach(testData => {
      it(`should return ${testData}`, async() => {
        const actualResult = calculator.multiply(testData);
        assert.strictEqual(actualResult, testData);
      });
    });
  });

  describe('multiplying valid values', function () {
    [
      {values: [7, 5], result: 35},
      {values: [2, -3], result: -6},
      {values: [-5, -13], result: 65},
      {values: [0.4, 0.3], result: 0.12},
      {values: [0.00236, 0.2387468], result: 0.00056344},
      {values: [3, 2, 5], result: 30},
      {values: [-5, 1.5, 48, 0.0234], result: -8.424},
    ].forEach(testData => {
      it(`should return ${testData.result}`, async() => {
        const actualResult = calculator.multiply(...testData.values);
        assert.strictEqual(actualResult, testData.result);
      });
    });
  });

  describe('multiplying invalid values', function () {
    [
      [1, ''],
      ['1', 0.25],
      ['asd', true],
      [false, 5],
      [13, null],
      [undefined, 1],
      [13, [2, 4]],
      [{}, 1],
    ].forEach(testData => {
      it(`should return ${NaN}`, async() => {
        assert.isNaN(calculator.multiply(...testData));
      });
    });

    it('should throw TypeError', async () => {
      assert.throws(() => {
        calculator.multiply(1234567890123456789012345678901234567890n);
      }, TypeError);
    });
  });
});
