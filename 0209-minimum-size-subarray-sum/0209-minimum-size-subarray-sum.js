/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    let distance = Number.MAX_SAFE_INTEGER;
    let left = 0;
    let right = 0;
    let sum = nums[0];
    // left pointer and right pointer defines the window. 
    // the goal is to find the smallest window that has a sum of s or larger.
    while (left <= right && right < nums.length) {
        if (sum >= s) {
            distance = Math.min(distance, right - left + 1);
            sum -= nums[left]
            left++;
        }
        else {
            right++
            sum += nums[right];
        }
    }

    return distance === Number.MAX_SAFE_INTEGER ? 0 : distance;
};