/**
 * @param {number[]} nums
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var maxSum = (nums, m, k) => {
    const map = new Map();
    let left = 0, right = 0, sum = 0, maxima = 0;
    const setter = (item) => {
        map.set(item, (map.get(item) || 0) + 1);
    }
    const remover = (item) => {
        if (map.get(item) === 1)
            map.delete(item);
        else
            map.set(item, map.get(item) - 1);
    }
    while (right < k) {
        setter(nums[right]);
        sum += nums[right];
        right++;
    }
    if (map.size >= m)
        maxima = Math.max(sum, maxima);
    while (right < nums.length) {
        sum -= nums[left];
        remover(nums[left]);
        sum += nums[right];
        setter(nums[right]);
        if (map.size >= m)
            maxima = Math.max(sum, maxima);
        left++;
        right++
    }
    return maxima
}
