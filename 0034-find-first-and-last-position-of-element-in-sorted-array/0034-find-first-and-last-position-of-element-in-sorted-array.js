/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums = [5, 7, 7, 8, 8, 10], target = 6) {
    let left = 0;
    let right = nums.length;
    let start = -1,
        end = -1;
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            let left = mid;
            let right = mid;
            while (nums[left] === nums[mid]) {
                left--;
            }
            start = left + 1;
            while (nums[right] === nums[mid]) {
                right++;
            }
            end = right - 1;
        }
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return [start, end];
};
