/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i],
            (map.get(nums[i]) || 0) + 1);
    }
    console.log({ map })
    const result = [];
    const sortedArray = Array.from(map).sort((a, b) => {
        if (a[1] === b[1])
            return b[0] - a[0]
        return a[1] - b[1]
    });
    console.log({ sortedArray })

    for (let [key, value] of sortedArray) {
        let left = 0;
        while (left < value) {
            result.push(key);
            left++;
        }
    }
    return result
};