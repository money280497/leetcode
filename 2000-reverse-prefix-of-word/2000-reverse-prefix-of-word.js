/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    let index = word.indexOf(ch);
    let res = "";
    while (index > -1) {
        res += word[index]
        index--
    }
    return res + word.substr(word.indexOf(ch) + 1, word.length)
};