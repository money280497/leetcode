/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    for (let i = 0; i < heights.length; i++) {
        for (let j = i + 1; j < heights.length; j++) {
            if (heights[i] < heights[j]) {
                [names[i], names[j]] = [names[j], names[i]];
                [heights[i], heights[j]] = [heights[j], heights[i]];
            }
        }
    }
    return names;
};