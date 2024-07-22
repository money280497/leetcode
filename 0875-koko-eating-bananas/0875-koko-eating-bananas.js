/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let left = 1, right = Math.max(...piles), mid;
    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);
        if (canKokoEatAtSpeed(piles, mid) <= h) {
            right = mid -1 
        } else {
            left = mid + 1;
        }
    }
    return left
};

var canKokoEatAtSpeed = (piles, speed) => {
    let count = 0;
    piles.map(itm => {
        count += Math.ceil(itm / speed)
    })
    return count
}