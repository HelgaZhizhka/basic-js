const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const result = [...str].reduce((acc, letter, index, arr) => {
    const prevLetter = arr[index - 1]
    if (letter === prevLetter) {
      acc[acc.length - 1].count++
    } else {
      acc.push({ count: 1, letter })
    }
    return acc
  }, [])

  return result
    .map(({ count, letter }) => (count > 1 ? count + letter : letter))
    .join('')
}

module.exports = {
  encodeLine,
}
