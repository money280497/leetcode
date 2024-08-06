/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let res = strs[0] || "";
    for (let i = 1; i < strs.length; i++) {
        let left = 0,
            right = strs[i].length > strs[0].length ? strs[i].length : strs[0].length;
        while (left < right) {
            if (res[left] !== strs[i][left]) {
                res = res.substring(0, left);
            }
            left++;
        }
    }
    return res;
};