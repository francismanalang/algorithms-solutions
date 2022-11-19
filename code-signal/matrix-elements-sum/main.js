// eslint-disable-next-line no-unused-vars
function matrixElementsSum(matrix) {
  let s = 0;
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j <= matrix.length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i + 1][j] = 0;
      }
      s += matrix[i][j];
    }
  }
  return s;
}
