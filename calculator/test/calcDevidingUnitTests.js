import { assert } from 'chai';
import { Calculator } from '../calculator.js';

const calculator = new Calculator();

describe('dividing', function () {
  describe('dividing one value', function () {
    it(`should return ${NaN}`, async() => {
      assert.isNaN(calculator.divide(5));
    });
  });

  describe('dividing valid values', function () {
    [
      {values: [12, 6], result: 2},
      {values: [2, -2], result: -1},
      {values: [-2, -3], result: 0.6666666666666666},
      {values: [0.2, 0.1], result: 2},
      {values: [0.00236, 0.2387468], result: 0.009884949243298758},
      {values: [3, 2, 5], result: 1.5},
      {values: [-5, 2.5, 48, 0.0234], result: -2},
      {values: [8, 0], result: Infinity},
      {values: [1234567890123456789012345678901234567890n, 1n], result: 1234567890123456789012345678901234567890n},
    ].forEach(testData => {
      it(`should return ${testData.result}`, async() => {
        const actualResult = calculator.divide(...testData.values);
        assert.strictEqual(actualResult, testData.result);
      });
    });
  });

  describe('dividing invalid values', function () {
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
      it(`should return ${NaN}`, async () => {
        assert.isNaN(calculator.divide(...testData));
      });
    });

    it('should throw TypeError', async () => {
      assert.throws(() => {
        calculator.divide(1234567890123456789012345678901234567890n, 1);
      }, TypeError);
    });
  });
});
