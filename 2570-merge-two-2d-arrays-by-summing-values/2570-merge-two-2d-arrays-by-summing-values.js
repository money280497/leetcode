/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
    let left = 0;
    let right = 0;
    let res = []
    while (left < nums1.length && right < nums2.length) {
        const [id1, num1] = nums1[left];
        const [id2, num2] = nums2[right];
        if (id1 < id2) {
            res.push(nums1[left])
            left++;
        } else if (id1 === id2) {
            res.push([id1, num1 + num2])
            left++;
            right++;
        } else {
            res.push(nums2[right])
            right++;
        }
    }
    while (left < nums1.length) {
        res.push(nums1[left])
        left++;
    } while (right < nums2.length) {
        res.push(nums2[right])
        right++;
    }
    return res
};