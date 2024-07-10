/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let deque = [];  // Store indices of the elements
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        // Remove elements not within the sliding window
        if (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }

        // Remove elements from the deque which are less than the current element
        while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[i]) {
            deque.pop();
        }

        // Add the current element index at the end of the deque
        deque.push(i);

        // The first element in deque is the largest element in the current window
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};
