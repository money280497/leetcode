/**
 * @param {string} s
 * @return {number}
 */
// var numberOfWays = function (s) {
//     let dp = Array(s).fill(1);
//     let count = 0;
//     // for (let i = 0; i < s.length - 2; i++) {
//     //     for (let j = i + 1; j < s.length - 1; j++) {
//     //         for (let k = j + 1; k < s.length; k++) {
//     //             if (s[i] !== s[j] && s[j] != s[k]) {
//     //                 count++;
//     //             }
//     //         }
//     //     }
//     // }
//     for (let i = 0; i < s.length; i++) {

//     }
//     return count
// };
var numberOfWays = function (s) {
    let n = s.length;
    let pref = Array.from({ length: n }, () => Array(2).fill(0));
    let zeros = 0;
    let ones = 0;
    let res = 0;

    for (let i = 0; i < n; i++) {
        pref[i][0] += pref[Math.max(i - 1, 0)][0];
        pref[i][1] += pref[Math.max(i - 1, 0)][1];

        if (s[i] === '0') {
            zeros++;
            pref[i][1] += ones;
            res += pref[i][0];
        }
        if (s[i] === '1') {
            ones++;
            pref[i][0] += zeros;
            res += pref[i][1];
        }
    }
    return res;
};
// 0 0 1
// 0 0 1 1
// 0 0 1 1 0 --> 0,2,4 0,3,4 1,2,4  1,3,4
// 0 1 0 1 0 1

