const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1
    if (arr.some((el) => Array.isArray(el))) {
      const depths = arr.map((el) => {
        if (Array.isArray(el)) {
          return this.calculateDepth(el)
        }
        return 0
      })
      depth += Math.max(...depths)
    }
    return depth
  }
}

module.exports = {
  DepthCalculator,
}
