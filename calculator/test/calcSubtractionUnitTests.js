import { assert } from 'chai';
import { Calculator } from '../calculator.js';

const calculator = new Calculator();

describe('subtraction', function () {
  describe('subtraction one value', function () {
    it(`should return ${NaN}`, async() => {
      assert.isNaN(calculator.subtraction(5));
    });
  });

  describe('subtraction valid values', function () {
    [
      {values: [7, 5], result: 2},
      {values: [2, -3], result: 5},
      {values: [-5, -13], result: 8},
      {values: [0.4, 0.3], result: 0.1},
      {values: [0.00236, 0.2387468], result: -0.2363868},
      {values: [3, 2, 5], result: 1},
      {values: [-5, 1.5, 48, 0.0234], result: -6.5},
      {values: [1234567890123456789012345678901234567890n, 1n], result: 1234567890123456789012345678901234567889n},
    ].forEach(testData => {
      it(`should return ${testData.result}`, async() => {
        const actualResult = calculator.subtraction(...testData.values);
        assert.strictEqual(actualResult, testData.result);
      });
    });
  });

  describe('subtraction invalid values', function () {
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
        assert.isNaN(calculator.subtraction(...testData));
      });
    });

    it('should throw TypeError', async () => {
      assert.throws(() => {
        calculator.subtraction(1234567890123456789012345678901234567890n, 1);
      }, TypeError);
    });
  });
});
