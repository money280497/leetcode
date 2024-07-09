/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
    const sMap = new Map();
    const tMap = new Map();
    for (let item of s) {
        sMap.set(item, (sMap.get(item) || 0) + 1);
    }
    for (let item of t) {
        tMap.set(item, (tMap.get(item) || 0) + 1);
    }
    console.log(sMap.keys());
    let res = 0;
    for (let key of sMap.keys()) {
        if (tMap.get(key) > sMap.get(key)) {
            continue;
        }
        res += sMap.get(key) - (tMap.get(key) || 0);
    }
    return res;
};