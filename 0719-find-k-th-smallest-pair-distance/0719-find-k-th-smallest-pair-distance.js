/**
 * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var smallestDistancePair = function (nums, k) {
//     const result = [];
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             result.push(Math.abs(nums[i] - nums[j]))
//         }
//     }
//     result.sort((a, b) => a - b)
//     return result[k - 1]
// };
/**
 * @param {number[]} numbers
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (numbers, k) {
    numbers.sort((a, b) => a - b);
    let minDistance = 0;
    let maxDistance = numbers[numbers.length - 1] - numbers[0];

    while (minDistance < maxDistance) {
        let midDistance = Math.floor((minDistance + maxDistance) / 2);
        if (countPairsWithinDistance(numbers, midDistance) < k) {
            minDistance = midDistance + 1;
        } else {
            maxDistance = midDistance;
        }
    }

    return minDistance;
};

/**
 * @param {number[]} numbers
 * @param {number} distance
 * @return {number}
 */
function countPairsWithinDistance(numbers, distance) {
    let count = 0;
    let left = 0;
    for (let right = 1; right < numbers.length; right++) {
        while (numbers[right] - numbers[left] > distance) {
            left++;
        }
        count += right - left;
    }
    return count;
}