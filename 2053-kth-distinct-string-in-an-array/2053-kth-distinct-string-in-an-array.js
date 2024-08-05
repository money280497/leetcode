/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) || 0) + 1)
    }
    let count = 0;
    for (let [key, value] of map) {
        if (value === 1) {
            count++
        }
        if (count === k) {
            return key
        }
    }
    return ""
};