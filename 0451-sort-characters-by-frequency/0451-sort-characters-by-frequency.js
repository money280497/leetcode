/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    const obj = {}
    for (let item of s) {
        obj[item] ? obj[item] += 1 : obj[item] = 1
    }
    let res = "";
    for (let item of Object.entries(obj).sort((a, b) => b[1] - a[1])) {
        res += item[0].repeat(item[1])
    }
    return res
};