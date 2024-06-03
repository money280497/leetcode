/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let row = grid.length;
    let col = grid[0].length;
    const visited = Array.from({ length: row }, () => Array(col).fill(0));
    let queue = [];
    let cntFresh = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 2) {
                queue.push([[i, j], 0]);
                visited[i][j] = 2
            }
            else {
                visited[i][j] = 0
            }
            if (grid[i][j] === 1) cntFresh++;
        }
    }
    let tm = 0;
    // Delta row and delta column
    const drow = [-1, 0, 1, 0];
    const dcol = [0, 1, 0, -1];
    let cnt = 0;
    while (queue.length) {
        const [[r, c], t] = queue.shift();
        tm = Math.max(tm, t);
        for (let i = 0; i < 4; i++) {
            const nrow = r + drow[i];
            const ncol = c + dcol[i];
            if (nrow >= 0 && nrow < row &&
                ncol >= 0 && ncol < col &&
                grid[nrow][ncol] === 1 && visited[nrow][ncol] === 0) {
                cnt++;
                queue.push([[nrow, ncol], t + 1]);
                visited[nrow][ncol] = 2;
            }
        }
    }
    if (cnt !== cntFresh) return -1
    return tm
};