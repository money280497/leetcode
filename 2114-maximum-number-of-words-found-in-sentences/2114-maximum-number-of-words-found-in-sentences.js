/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    let maxima = 0;
    for (let word of sentences) {
        maxima = Math.max(word.split(" ").length, maxima)
    }
    return maxima
};