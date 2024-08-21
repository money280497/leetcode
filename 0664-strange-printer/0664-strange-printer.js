/**
 * @param {string} s
 * @return {number}
 */
function strangePrinter(s) {
    if (s === null || s.length === 0) {
        return 0;
    }

    const n = s.length;
    const state = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        state[i][i] = 1;
    }

    for (let i = n - 1; i >= 0; i--) {
        for (let dist = 1; dist + i < n; dist++) {
            const j = dist + i;
            if (dist === 1) {
                state[i][j] = (s.charAt(i) === s.charAt(j)) ? 1 : 2;
                continue;
            }
            state[i][j] = Infinity;
            for (let k = i; k + 1 <= j; k++) {
                const tmp = state[i][k] + state[k + 1][j];
                state[i][j] = Math.min(state[i][j], tmp);
            }
            if (s.charAt(i) === s.charAt(j)) {
                state[i][j]--;
            }
        }
    }

    return state[0][n - 1];
}
