/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

 const maxOperations = (nums, k) => {
  let count = new Map();
  let operations = 0;

  for (const num of nums) {
    let complement = k - num;

    if (count.has(complement) && count.get(complement) > 0) {
      operations += 1;
      count.set(complement, count.get(complement) - 1);
    } else {
      count.set(num, (count.get(num) || 0) + 1);
    }
  }

  return operations;
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