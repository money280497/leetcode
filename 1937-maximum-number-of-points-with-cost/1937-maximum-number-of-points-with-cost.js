/**
 * @param {number[][]} points
 * @return {number}
 */
function maxPoints(P) {
    const m = P.length;
    const n = P[0].length;
    let pre = new Array(n).fill(0);

    for (let i = 0; i < n; ++i) {
        pre[i] = P[0][i];
    }

    for (let i = 0; i < m - 1; ++i) {
        let lft = new Array(n).fill(0);
        let rgt = new Array(n).fill(0);
        let cur = new Array(n).fill(0);

        lft[0] = pre[0];
        rgt[n - 1] = pre[n - 1];

        for (let j = 1; j < n; ++j) {
            lft[j] = Math.max(lft[j - 1] - 1, pre[j]);
        }

        for (let j = n - 2; j >= 0; --j) {
            rgt[j] = Math.max(rgt[j + 1] - 1, pre[j]);
        }

        for (let j = 0; j < n; ++j) {
            cur[j] = P[i + 1][j] + Math.max(lft[j], rgt[j]);
        }

        pre = cur;
    }

    let ans = 0;
    for (let i = 0; i < n; ++i) {
        ans = Math.max(ans, pre[i]);
    }

    return ans;
}
