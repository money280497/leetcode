/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums) {
    const numsArr = nums.concat(nums);
    let left = 0, right = 0;
    let oneCount = 0, zeroCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1)
            oneCount++
    }
    let minima = 1000;
    while (right < oneCount) {
        if (numsArr[right] === 0)
            zeroCount += 1
        right++
    }
    minima = Math.min(minima, zeroCount);
    while (right < numsArr.length) {
        if (numsArr[right] === 0) {
            zeroCount++;
        }
        if (numsArr[left] === 0) {
            zeroCount--;
        }
        minima = Math.min(minima, zeroCount)
        left++;
        right++;
    }
    return minima
};