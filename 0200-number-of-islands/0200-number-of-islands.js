/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let numberOfIsLands = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1") {
                numberOfIsLands += dfs(grid, i, j);
            }
        }
    }
    return numberOfIsLands
};
const dfs = (grid, row, col) => {
    if (row < 0 || row > grid.length - 1 || col < 0 || col > grid[row].length - 1 || grid[row][col] === "0")
        return
    grid[row][col] = "0";
    dfs(grid, row, col - 1)
    dfs(grid, row, col + 1)
    dfs(grid, row + 1, col)
    dfs(grid, row - 1, col)
    return 1;
}