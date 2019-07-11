'use strict'

const { add, sum } = require('..')

describe('@daneroo/ottawajs-lerna-math', () => {
  describe('add', () => {
    test.each([
      ['integers', 3, 1, 2],
      ['floats', 3.1416, 1.0406, 2.101],
      ['string', '12', '1', '2']
    ])('Check (%s): %s == add(%s,%s)', (name, expected, a, b) => {
      expect(add(a, b)).toEqual(expected)
    })
  })
  describe('sum (2-arity)', () => {
    test.each([
      ['integers', 3, 1, 2],
      ['floats', 3.1416, 1.0406, 2.101],
      ['string', '012', '1', '2']
    ])('Check (%s): %s == add(%s,%s)', (name, expected, a, b) => {
      expect(sum(a, b)).toEqual(expected)
    })
  })
  describe('sum (n-arity)', () => {
    test.each([
      ['integers', 3, [1, 2]],
      ['integers:3', 6, [1, 2, 3]],
      ['integers:0', 0, [-2, -1, 0, 1, 2]],
      ['empty', 0, []],
      ['floats', 3.1416, [1.0406, 2.101]],
      ['string', '012', ['1', '2']]
    ])('Check (%s): %s == add(%s)', (name, expected, numbers) => {
      expect(sum(...numbers)).toEqual(expected)
    })
  })
})
