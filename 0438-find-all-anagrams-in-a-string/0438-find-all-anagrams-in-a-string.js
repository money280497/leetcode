/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const helper = (sMap, pMap, p) => {
    for (let i = 0; i < p.length; i++) {
        if (sMap.get(p[i]) !== pMap.get(p[i])) return false;
    }
    return true;
};
var findAnagrams = function (s = "cbaebabacd", p = "abc") {
    if (p.length > s.length) return [];
    const result = [];
    const sMap = new Map();
    const pMap = new Map();
    for (let i = 0; i < p.length; i++) {
        pMap.set(p[i], (pMap.get(p[i]) || 0) + 1);
        sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
    }
    //a -1, b-1, c-1
    let start = 0;
    let end = s.length;
    let left = p.length;
    console.log({ sMap, pMap, left, start, end, result });

    while (start < end) {
        if (helper(sMap, pMap, p)) result.push(start);
        sMap.set(s[left], (sMap.get(s[left]) || 0) + 1);
        if (sMap.has(s[start])) {
            if (sMap.get(s[start]) === 1) {
                sMap.delete(s[start]);
            } else {
                sMap.set(s[start], sMap.get(s[start]) - 1);
            }
        }
        left++;
        start++;
    }
    return result;
};