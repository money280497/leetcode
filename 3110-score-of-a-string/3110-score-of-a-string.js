/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
    if (!s.length)
        return 0
    let start = 0;
    let res = 0;
    while (start < s.length - 1) {
        res += Math.abs(s[start].charCodeAt(0) - s[start + 1].charCodeAt(0))
        start++;
    }
    return res
};