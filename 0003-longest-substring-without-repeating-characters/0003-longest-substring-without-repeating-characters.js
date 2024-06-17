/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let set = new Set();
    let left = 0;
    let right = 0;
    let longestStr = 0;
    while (right < s.length) {
        if (!set.has(s[right])) {
            set.add(s[right]);
            longestStr = Math.max(longestStr, set.size)
            right++
        } else {
            set.delete(s[left]);
            left++
        }
    }
    return longestStr
}

