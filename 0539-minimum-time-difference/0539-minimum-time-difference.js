/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
    // if (timePoints.length < 1) return 0
    // timePoints.sort((a, b) => a - b)
    timePoints.sort();
    console.log({ timePoints })
    let minima = Infinity
    let n = timePoints.length
    // let [start, end] = timePoints[0].split(":");
    // let [start1, end1] = timePoints[1].split(":");

    // if (start === "00") {
    //     start = 24
    // }
    // return
    let hasZero = false
    // let min = (+start * 60) + (+end);
    for (let i = 1; i < timePoints.length; i++) {
        let [start, end] = timePoints[i - 1].split(":");
        let [start1, end1] = timePoints[i].split(":");
        if (start === "00") {
            hasZero = true
        }
        minima = Math.min(minima, Math.abs(((+start1) * 60 + (+end1)) - ((+start) * 60 + (+end))))
    }
    if (hasZero) {
        let [start, end] = timePoints[n - 1].split(":");
        let [start0, end0] = timePoints[0].split(":");
        minima = Math.min(minima, Math.abs(((24) * 60 + (+end0)) - ((+start) * 60 + (+end))))
    }
    console.log({ timePoints, minima })
    return minima
};
