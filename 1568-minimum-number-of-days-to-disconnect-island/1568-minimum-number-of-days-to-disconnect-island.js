/**
 * @param {number[][]} grid
 * @return {number}
 */
const DIRECTIONS = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
];

var minDays = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    // Count initial islands
    const initialIslandCount = countIslands(grid);

    // Already disconnected or no land
    if (initialIslandCount !== 1) {
        return 0;
    }

    // Try removing each land cell
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 0) continue; // Skip water

            // Temporarily change to water
            grid[row][col] = 0;
            const newIslandCount = countIslands(grid);

            // Check if disconnected
            if (newIslandCount !== 1) return 1;

            // Revert change
            grid[row][col] = 1;
        }
    }

    return 2;
}

var countIslands = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    let islandCount = 0;

    // Iterate through all cells
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            // Found new island
            if (!visited[row][col] && grid[row][col] === 1) {
                exploreIsland(grid, row, col, visited);
                islandCount++;
            }
        }
    }
    return islandCount;
}

// Helper method to explore all cells of an island
var exploreIsland = function (grid, row, col, visited) {
    visited[row][col] = true;

    // Check all adjacent cells
    for (let direction of DIRECTIONS) {
        const newRow = row + direction[0];
        const newCol = col + direction[1];
        // Explore if valid land cell
        if (isValidLandCell(grid, newRow, newCol, visited)) {
            exploreIsland(grid, newRow, newCol, visited);
        }
    }
}

var isValidLandCell = function (grid, row, col, visited) {
    const rows = grid.length;
    const cols = grid[0].length;
    // Check bounds, land, and not visited
    return (
        row >= 0 &&
        col >= 0 &&
        row < rows &&
        col < cols &&
        grid[row][col] === 1 &&
        !visited[row][col]
    );
}
