/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let maxima = 0;
    let res = "";
    const helper = (left, right) => {
        let count = 0;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count = s.substring(left, right + 1).length;
            if (count > maxima) {
                maxima = Math.max(count, maxima);
                res = s.substring(left, right + 1)
            }
            left--;
            right++;
        }
    }
    for (let i = 0; i < s.length; i++) {
        helper(i, i);
        helper(i, i + 1);
    }
    return res;
};