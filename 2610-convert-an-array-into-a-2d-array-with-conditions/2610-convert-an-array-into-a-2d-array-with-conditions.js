/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
    const result = []
    const cache = {};
    for (const item of nums) {
        cache[item] = (cache[item] || 0) + 1;
    }
    while (Object.keys(cache).length) {
        const res = [];
        let i = 0;
        for (let i of Object.keys(cache)) {
            if (cache[i] === 0) delete cache[i]
            else {
                res.push(parseInt(i))
                cache[i] -= 1
            }
        }
        if (res.length > 0) {
            result.push(res)
        }
    }
    return result
};