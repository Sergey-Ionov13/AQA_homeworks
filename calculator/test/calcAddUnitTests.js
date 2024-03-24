import { assert } from 'chai';
import { Calculator } from '../calculator.js';

const calculator = new Calculator();

describe('adding', function() {
  describe('adding one value', function () {
    [5, -2, 0, 0.35].forEach(testData => {
      it(`should return ${testData}`, async() => {
        const actualResult = calculator.add(testData);
        assert.strictEqual(actualResult, testData);
      });
    });
  });

  describe('adding valid values', function () {
    [
      {values: [1, 2], result: 3},
      {values: [2, -3], result: -1},
      {values: [-5, -13], result: -18},
      {values: [0.1, 0.2], result: 0.3},
      {values: [0.00236, 0.2387468], result: 0.2411068},
      {values: [1, 2, 5], result: 8},
      {values: [-5, 0, 1.5, 48, 0.0234], result: 44.5234},
    ].forEach(testData => {
      it(`should return ${testData.result}`, async() => {
        const actualResult = calculator.add(...testData.values);
        assert.strictEqual(actualResult, testData.result);
      });
    });
  });

  describe('adding invalid values', function () {
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
        assert.isNaN(calculator.add(...testData));
      });
    });

    it('should throw TypeError', async () => {
      assert.throws(() => {
        calculator.add(1234567890123456789012345678901234567890n);
      }, TypeError);
    });
  });
});
