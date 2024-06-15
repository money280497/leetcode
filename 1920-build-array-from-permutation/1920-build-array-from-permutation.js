/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
    let start = 0;
    let res = [];
    while (start < nums.length) {
        res.push(nums[nums[start]])
        start++
    }
    return res
};