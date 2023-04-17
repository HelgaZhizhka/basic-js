const { NotImplementedError } = require('../extensions/index.js')

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = []

  for (let i = 0; i < matrix.length; i++) {
    const row = []
    for (let j = 0; j < matrix[i].length; j++) {
      let minesCount = 0
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (x !== 0 || y !== 0) {
            const newX = i + x
            const newY = j + y
            if (
              newX >= 0 &&
              newX < matrix.length &&
              newY >= 0 &&
              newY < matrix[i].length &&
              matrix[newX][newY]
            ) {
              minesCount++
            }
          }
        }
      }
      row.push(minesCount)
    }
    result.push(row)
  }

  return result
}

module.exports = {
  minesweeper,
}
