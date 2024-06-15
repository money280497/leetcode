/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
    let start = 0;
    let result = 0;
    while (start < n.length) {
        result = Math.max(result, +n[start])
        start++
    }
    return result
};