var maximumSubarraySum = function (nums = [4, 4, 4], k = 3) {
    let left = 0,
        right = 0;
    const map = new Map();
    let maxima = 0;
    let currentMax = 0;
    let count = 0;
    while (right < k) {
        map.set(nums[right], (map.get(nums[right]) || 0) + 1);
        currentMax += nums[right];
        right++;
    }
    if (map.size === k) {
        maxima = Math.max(maxima, currentMax);
    }
    while (right < nums.length) {
        const value = map.get(nums[left]);
        if (value === 1) {
            map.delete(nums[left]);
        } else {
            map.set(nums[left], map.get(nums[left] || 0) - 1);
        }
        map.set(nums[right], (map.get(nums[right]) || 0) + 1);
        currentMax -= nums[left];
        currentMax += nums[right];
        if (map.size === k) {
            maxima = Math.max(maxima, currentMax);
        }
        left++;
        right++;
    }
    return maxima;
};