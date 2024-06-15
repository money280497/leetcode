/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    let res = []

    let leastIndex = 9999

    for (let i = 0; i < list1.length; i++) {
        const j = list2.indexOf(list1[i])

        if (j !== -1) {
            if (i + j < leastIndex) {
                res = [list1[i]]
                leastIndex = i + j
                continue
            }
            if (i + j === leastIndex) {
                res.push(list1[i])
                leastIndex = i + j
            }
        }
    }

    return res
};