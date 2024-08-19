/**
 * @param {number} n
 * @return {number}
 */
function minSteps(n) {
    if (n === 1) return 0;
    n = n;

    const memo = Array.from({ length: n + 1 }, () => Array(Math.floor(n / 2) + 1).fill(0));
    return 1 + minStepsHelper(1, 1, memo, n);
}

function minStepsHelper(currLen, pasteLen, memo, n) {
    if (currLen === n) return 0;
    if (currLen > n) return 1000;

    // Return result if it has been calculated already
    if (memo[currLen][pasteLen] !== 0) return memo[currLen][pasteLen];

    const opt1 = 1 + minStepsHelper(currLen + pasteLen, pasteLen, memo, n);
    const opt2 = 2 + minStepsHelper(currLen * 2, currLen, memo, n);
    memo[currLen][pasteLen] = Math.min(opt1, opt2);
    return memo[currLen][pasteLen];
}
