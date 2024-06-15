/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {
    let start = 0;
    let sourceMap = new Map();
    let destinationMap = new Map();
    while (start < s.length) {
        sourceMap.set(s[start], start)
        destinationMap.set(t[start], start)
        start++
    }
    console.log({ sourceMap, destinationMap })
    let res = 0;
    start = 0;
    while (start < s.length) {
        res += Math.abs(destinationMap.get(s[start]) - sourceMap.get(s[start]))
        start++;
    }
    return res
};