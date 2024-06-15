/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    let map = new Map();
    let start = 0;
    while (start < nums.length) {
        map.set(nums[start], (map.get(nums[start]) || 0) + 1)
        start++;
    }
    let res = 0
    for (let [item, value] of map) {
        res += Math.floor(value * (value - 1) / 2)
    }
    return res
};