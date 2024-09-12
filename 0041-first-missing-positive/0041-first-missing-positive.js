/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    let isPresent = false;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            isPresent = true
        }
        else if (nums[i] > nums.length || nums[i] < 1) {
            nums[i] = 1
        }
    }
    if (!isPresent)
        return 1
    console.log({ nums })
    for (let i = 0; i < nums.length; i++) {
        let value = Math.abs(nums[i]);//1
        if (nums[i] === nums.length) {
            nums[0] = -Math.abs(nums[value])
        } else {
            nums[value] = -Math.abs(nums[value])
        }
    }
    console.log({ a: nums })

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > 0)
            return i
    }
    if (nums[0] > 0)
        return nums.length
    return nums.length + 1
};