/**
 * @param {number[][]} arrays
 * @return {number}
 */
function maxDistance(arrays) {
    let result = Number.MIN_SAFE_INTEGER;
    let max = arrays[0][arrays[0].length - 1];
    let min = arrays[0][0];
    
    for (let i = 1; i < arrays.length; i++) {
        result = Math.max(result, Math.abs(arrays[i][0] - max));
        result = Math.max(result, Math.abs(arrays[i][arrays[i].length - 1] - min));
        max = Math.max(max, arrays[i][arrays[i].length - 1]);
        min = Math.min(min, arrays[i][0]);
    }
    
    return result;
}
