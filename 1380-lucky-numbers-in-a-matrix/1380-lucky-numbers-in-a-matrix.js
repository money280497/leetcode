/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    const rows = [], cols = [];
    for (let i = 0; i < matrix.length; i++) {// min in row
        let minima = Infinity;
        for (let j = 0; j < matrix[i].length; j++) {
            minima = Math.min(minima, matrix[i][j])
        }
        rows.push(minima)
    }
    for (let i = 0; i < matrix[0].length; i++) {// min in row
        let maxima = -Infinity;
        for (let j = 0; j < matrix.length; j++) {
            maxima = Math.max(maxima, matrix[j][i])
        }
        cols.push(maxima)
    }
    console.log(rows, cols);
    const result = []
    for (let i = 0; i < rows.length; i++) {
        if (cols.includes(rows[i])) {
            result.push(rows[i])
        }
    }
    return result
};