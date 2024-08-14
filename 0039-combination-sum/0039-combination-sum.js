/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// var combinationSum = function (candidates, target) {
//     const res = [];

//     function makeCombination(idx, comb, total) {
//         if (total === target) {
//             res.push([...comb]);
//             return;
//         }

//         if (total > target || idx >= candidates.length) {
//             return;
//         }

//         comb.push(candidates[idx]);
//         makeCombination(idx, comb, total + candidates[idx]);
//         comb.pop();
//         makeCombination(idx + 1, comb, total);
//     }

//     makeCombination(0, [], 0);
//     return res;
// };
var combinationSum = function (candidates, target) {
    const res = [];
    let map = {};
    candidates.sort((a, b) => a - b)
    const helper = (sum, indx, arr) => {
        let currentItm = candidates[indx]
        let key = arr.join("-")
        if (sum > target || map[key]) {
            map[key] = true
            return res
        } else if (sum === target) {
            res.push([...arr])
            map[key] = true
            return res
        } else if (indx >= candidates.length) {
            map[key] = true
            return res
        } else {
            let localSum = sum + currentItm
            helper(localSum, indx, [...arr, currentItm])
            helper(localSum, indx + 1, [...arr, currentItm])
            helper(sum, indx + 1, [...arr])
            helper(sum, indx, [...arr])
            map[key] = true
            return res
        }
    }
    return helper(0, 0, [])
};