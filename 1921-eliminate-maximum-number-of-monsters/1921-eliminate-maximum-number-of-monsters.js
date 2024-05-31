/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function (dist, speed) {
    let count = 0
    if (!dist.length) {
        return count
    }
    for (let i = 0; i < dist.length; i++) {
        dist[i] = Math.ceil(dist[i] / speed[i]);
    }
    dist = dist.sort((a, b) => a - b)
    let start = 0;
    if (dist[0] === 0) {
        return 1
    }
    while (start < dist.length) {
        if (dist[start] - count > 0) {
            count++;
        } else {
            return count
        }
        start++;
    }
    return count
};
