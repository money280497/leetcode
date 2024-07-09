/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
    const result = [];
    for (let i = 0; i < l.length; i++) {
        const [r1, r2] = [l[i], r[i]];
        const arr = [...nums.slice(r1, r2+1)];
        arr.sort((a, b) => a - b);
        if (arr.length < 2) {
            result.push(true)
        }
        const diff = arr[1] - arr[0];
        let flag = true;
        for (let i = 2; i < arr.length; i++) {
            if (arr[i] - arr[i - 1] !== diff) {
                flag = false;
                result.push(false)
                break;
            }
        }
        if (flag) {
            result.push(true)
        }
    }
    return result
};