/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// var combinationSum2 = function (candidates, target) {
//     candidates.sort((a, b) => a - b);
//     const res = [];

//     function dfs(target, start, comb) {
//         if (target < 0) {
//             return;
//         }

//         if (target === 0) {
//             res.push(comb.slice());
//             return;
//         }

//         for (let i = start; i < candidates.length; i++) {

//             if (i > start && candidates[i] === candidates[i - 1]) {
//                 continue;
//             }

//             if (candidates[i] > target) {
//                 break;
//             }

//             dfs(target - candidates[i], i + 1, comb.concat(candidates[i]));
//         }
//     }

//     dfs(target, 0, []);
//     return res;
// };

var combinationSum2 = function (candidates, target) {
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
            helper(localSum, indx + 1, [...arr, currentItm])
            helper(sum, indx + 1, [...arr])
            map[key] = true
            return res
        }
    }
    return helper(0, 0, [])
};