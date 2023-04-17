const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numArray = [...(n + '')]
  let maxNum = 0
  for (let i = 0; i < numArray.length; i++) {
    let tmpArray = [...numArray]
    tmpArray.splice(i, 1)
    let newNum = +tmpArray.join('')
    if (newNum > maxNum) {
      maxNum = newNum
    }
  }
  return maxNum
}

module.exports = {
  deleteDigit,
}
