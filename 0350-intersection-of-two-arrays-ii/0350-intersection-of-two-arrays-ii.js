/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const map1 = new Map();
    const map2 = new Map();
    const result = [];
    for (let i = 0; i < nums1.length; i++) {
        map1.set(nums1[i], (map1.get(nums1[i]) || 0) + 1)
    }
    for (let i = 0; i < nums2.length; i++) {
        map2.set(nums2[i], (map2.get(nums2[i]) || 0) + 1)
    }
    for (let [key, value] of map1) {
        if (map2.has(key)) {
            let start = 0
            while (start < Math.min(value, map2.get(key))) {
                result.push(key);
                start++
            }
        }
    }
    return result;
};