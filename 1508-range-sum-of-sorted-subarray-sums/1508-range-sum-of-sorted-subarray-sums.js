/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
    const res = [];
    for (let i = 0; i < nums.length; i++) {
        let ans = nums[i];
        res.push(ans);
        for (let j = i + 1; j < nums.length; j++) {
            ans += nums[j]
            res.push(ans);
        }
    }
    res.sort((a, b) => a - b);
    let result = 0;
    let l = left - 1;
    let r = right - 1
    while (l <= r) {
        result = (result + res[l]) % 1000000007;
        l++;
    }
    return result
}; 