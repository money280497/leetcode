/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var maxOperations = function (nums, k) {
    let obj1 = {}, count = 0;
    for (let item of nums) {
        obj1[item] ? obj1[item] = obj1[item] + 1 : obj1[item] = 1;
    }
    for (let item of nums) {
        if (obj1[k - item] && obj1[k - item] > 0) {
            obj1[k - item] -= 1;
            obj1[item] -= 1;
            if (obj1[item] > -1 && obj1[k - item] > -1)
                count++;
        }
    }
    return count
};
// var maxOperations = function (nums, k) {
//     let obj1 = {}, count = 0;
//     for (let item of nums) {
//         obj1[item] ? obj1[item] = obj1[item] + 1 : obj1[item] = 1;
//     }
//     for (let item of nums) {
//         if (obj1[k - item] && obj1[k - item] > 0) {
//             obj1[k - item] -= 1;
//             obj1[item] -= 1;
//             if (obj1[item] < 0 || obj1[k - item] < 0)
//                 count++;
//         }
//     }
//     return count
// };