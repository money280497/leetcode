/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], 1)
    }
    const res = [];
    for (let i = 1; i <= nums.length; i++) {
        if (!map.has(i))
            res.push(i);
    }
    return res
};