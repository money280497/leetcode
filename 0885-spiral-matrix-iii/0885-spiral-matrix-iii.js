/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = (rows, cols, rStart, cStart) => {
    // Store all possible directions in an array.
    const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const traversed = Array(rows * cols).fill(0).map(() => Array(2).fill(0));
    let idx = 0;

    // Initial step size is 1, value of direction represents the current direction.
    for (let step = 1, direction = 0; idx < rows * cols;) {
        // direction = 0 -> East, direction = 1 -> South
        // direction = 2 -> West, direction = 3 -> North
        for (let i = 0; i < 2; ++i) {
            for (let j = 0; j < step; ++j) {
                // Validate the current position
                if (
                    rStart >= 0 &&
                    rStart < rows &&
                    cStart >= 0 &&
                    cStart < cols
                ) {
                    traversed[idx][0] = rStart;
                    traversed[idx][1] = cStart;
                    ++idx;
                }
                // Make changes to the current position.
                rStart += dir[direction][0];
                cStart += dir[direction][1];
            }

            direction = (direction + 1) % 4;
        }
        ++step;
    }
    return traversed;
}
