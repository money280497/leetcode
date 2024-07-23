/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid
        if (nums[mid] >= nums[left]) {
            if (target < nums[mid] && target >= nums[left]) {
                right = mid;
            }
            else {
                left = mid + 1;
            }
        }
        else {
            if (target <= nums[right] && target > nums[mid]) {
                left = mid + 1;
            }
            else {
                right = mid;
            }
        }
    }
    return -1
};
// 4 5 6 0 1 2 3
// 0 1 2 3 4 5 6 
// 6 5 4 3 2 1 0
// 2 3 4 5 6 0 1