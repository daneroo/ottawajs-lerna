'use strict'

const { add } = require('..')

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
})
