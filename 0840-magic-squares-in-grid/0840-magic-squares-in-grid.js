/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
    const rows = grid.length - 3;
    const cols = grid[0].length - 3;
    let res = 0;
    if (rows < 0 || cols < 0) return res;
    const helper = (grid, row, col) => {
        const map = new Map();
        let r = row,
            c = col;
        for (let i = row; i < row + 3; i++) {
            let sum = 0,
                dig = 0,
                flag = false;
            for (let j = col; j < col + 3; j++) {
                if (map.has(grid[i][j]) || grid[i][j] > 9 || grid[i][j] < 1) return false;
                sum += grid[i][j];
                map.set(grid[i][j], 1);
                if (i === r && j === c && !flag) {
                    flag = true;
                    dig = grid[i][j] + grid[i + 1][j + 1] + grid[i + 2][j + 2];
                }
            }

            if (i === r && dig !== 15) {
                return false;
            }
            if (sum !== 15) return false;
        }
        map.clear();
        for (let i = col; i < col + 3; i++) {
            let sum = 0,
                dig = 0,
                flag = false;
            for (let j = row; j < row + 3; j++) {
                if (map.has(grid[j][i]) || grid[j][i] > 9 || grid[j][i] < 1) return false;
                sum += grid[j][i];
                map.set(grid[j][i], 1);
                if (i === c + 2 && j === r && !flag) {
                    flag = true; // i ==2 j==0
                    dig = grid[j][i] + grid[j + 1][i - 1] + grid[j + 2][i - 2];
                }
            }
            if (i === c + 2 && dig !== 15) {
                return false;
            }
            if (sum !== 15) return false;
        }
        map.clear();
        return true;
    };
    for (let i = 0; i <= rows; i++) {
        for (let j = 0; j <= cols; j++) {
            if (helper(grid, i, j)) {
                res++;
            }
        }
    }
    return res;
};