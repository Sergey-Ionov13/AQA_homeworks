import { assert } from 'chai';
import { Calculator } from '../calculator.js';

const calculator = new Calculator();

describe('exponentiation', function () {
  describe('exponentiation (squaring) valid values', function () {
    [
      {value: 0, result: 0},
      {value: 1, result: 1},
      {value: 13, result: 169},
      {value: -1, result: 1},
      {value: -3, result: 9},
      {value: 0.3, result: 0.09},
      {value: 1234567890123456789012345678901234567890n, result: 1234567890123456789012345678901234567890n * 1234567890123456789012345678901234567890n},
    ].forEach(testData => {
      it(`should return ${testData.result}`, async() => {
        const actualResult = calculator.exponentiation(testData.value);
        assert.strictEqual(actualResult, testData.result);
      });
    });
  });

  describe('exponentiation (squaring) invalid values', function () {
    ['', 'a', false, null, undefined, [], {}].forEach(testData => {
      it(`should return ${NaN}`, async() => {
        assert.isNaN(calculator.exponentiation(testData));
      });
    });
  });

  // Поскольку функция вроде бы должна уметь возводить в любую степень, снизу есть соответствующие тесты
  // Я их скипнул на тот случай, если это лишнее
  describe.skip('exponentiation valid values', function () {
    [
      {values: [2, 3], result: 8},
      {values: [3, 4], result: 81},
      {values: [2, -3], result: 0.125},
      {values: [-5, 3], result: -125},
      {values: [81, 0.25], result: 3},
      {values: [0.04, 0.5], result: 0.2},
      {values: [195, 0], result: 1},
      {values: [9, 1], result: 9},
      {values: [256, -0.25], result: 0.25},
    ].forEach(testData => {
      it(`should return ${testData.result}`, async() => {
        const actualResult = calculator.exponentiation(...testData.values);
        assert.strictEqual(actualResult, testData.result);
      });
    });
  });

  describe.skip('exponentiation invalid values', function () {
    [
      [-256, -0.25],
      [-1, 0.5],
      ['asd', 2],
      [false, 2],
      [null, 2],
      [undefined, 2],
      [[2, 4], 2],
      [{}, 1],
      [2, 'asd'],
      [2, ''],
      [2, false],
      [2, null],
      [2, undefined],
      [2, [2, 4]],
      [2, {}],
    ].forEach(testData => {
      it(`should return ${NaN}`, async() => {
        assert.isNaN(calculator.exponentiation(...testData));
      });
    });

    it('should throw TypeError', async () => {
      assert.throws(() => {
        calculator.exponentiation(1234567890123456789012345678901234567890n, 1);
      }, TypeError);
    });
  });
});
