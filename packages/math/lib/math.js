'use strict'

module.exports = {
  add,
  sum
}

function add (a, b) {
  return a + b
}

function sum (...numbers) {
  return numbers.reduce((previous, current) => {
    return previous + current
  }, 0)
}
