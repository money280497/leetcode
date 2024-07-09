/**
 * @param {number[]} nums
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var maxSum = function (nums, m, k) {
    let left = 0,
        sum = 0,
        maxima = 0;
    let count = 0;
    const map = new Map();
    while (left < k) {
        if (!map.has(nums[left])) {
            map.set(nums[left], 1);
        } else {
            map.set(nums[left], map.get(nums[left]) + 1);
        }
        sum += nums[left];
        left++;
    }
    if (map.size >= m) {
        maxima = Math.max(sum, maxima);
    }
    let right = left;
    left = 0;
    console.log({ left, sum, map });
    while (right < nums.length) {
        sum -= nums[left];
        if (!map.has(nums[right])) {
            map.set(nums[right], 1);
        } else {
            map.set(nums[right], map.get(nums[right]) + 1);
        }
        if (map.get(nums[left]) === 1) {
            map.delete(nums[left])
        } else {
            map.set(nums[left], map.get(nums[left]) - 1);
        }
        sum += nums[right];
        if (map.size >= m) {
            maxima = Math.max(sum, maxima);
        }
        right++;
        left++;
    }
    return maxima;
};
console.log(maxSum((nums = [1, 2, 2, 3]), (m = 3), (k = 3)));
