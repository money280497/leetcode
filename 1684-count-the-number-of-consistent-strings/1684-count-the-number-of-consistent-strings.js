/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    const set = new Set(allowed.split(""));
    const dict1 = {}
    for (let item of set) {
        console.log({ item })
        if (!dict1[item]) {
            dict1[item] = 1
        } else {
            dict1[item] += 1
        }
    }
    console.log({ dict1 })
    let count = 0, flag;
    for (let item of words) {
        flag = true;
        for (let i = 0; i < item.length; i++) {
            if (!dict1[item[i]]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            count++
        }
    }
    return count
};