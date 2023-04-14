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
  let colNum = matrix.length
  for (let row = 0; row < colNum; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      let sum = 0,
        rowLength = matrix[row].length
      if (row - 1 >= 0 && column - 1 >= 0) {
        if (matrix[row - 1][column - 1]) sum++
      }
      if (row - 1 >= 0) {
        if (matrix[row - 1][column]) sum++
      }
      if (column - 1 >= 0 && row + 1 <= colNum) {
        if (matrix[row - 1][column + 1]) sum++
      }
      if (row - 1 >= 0) {
        if (matrix[row - 1][column]) sum++
      }
      if (row + 1 <= colNum) {
        if (matrix[row - 1][column + 1]) sum++
      }
    }
  }
}

module.exports = {
  minesweeper,
}
