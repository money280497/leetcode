/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
const canPluck = (bloomDay, limit, k, m) => {
    let count = 0;
    let res = 0;
    for (let i = 0; i < bloomDay.length; i++) {
        if (bloomDay[i] <= limit) {
            count++;
        }
        else {
            res += Math.floor(count / k);
            count = 0;
        }
    }
    res += Math.floor(count / k);
    if (res >= m) {
        return true
    } else {
        return false
    }
}
var minDays = function (bloomDay, m, k) {
    if (bloomDay.length < m * k) {
        return -1
    }
    let left = Math.min(...bloomDay);
    let right = Math.max(...bloomDay);
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (canPluck(bloomDay, mid, k, m)) {
            right = mid;
        }
        else {
            left = mid + 1
        }
    }
    return left;
};