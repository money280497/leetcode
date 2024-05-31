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
    let time = []
    for (let i = 0; i < dist.length; i++) {
        time.push(Math.ceil(dist[i] / speed[i]))
    }
    time = time.sort((a, b) => a - b)
    let start = 0;
    if (time[0] === 0) {
        return 1
    }
    while (start < dist.length) {
        if (time[start] - count > 0) {
            count++;
        } else {
            return count
        }
        start++;
    }
    return count
};
