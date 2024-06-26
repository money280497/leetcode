/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
    const leftArr = [];
    let prev = Infinity;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c)
            prev = i
        leftArr[i] = Math.abs(prev - i)
    }
    prev = Infinity;
    for (i = s.length - 1; i >= 0; i--) {
        if (s[i] === c)
            prev = i
        leftArr[i] = Math.min(leftArr[i], Math.abs(prev - i))
    }
    return leftArr
};