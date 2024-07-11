// var wordBreak = function (s, wordDict) {
//     let left = 0,
//         itr = "",
//         parentItr = "",
//         result = [];
//     for (let i = 0; i < s.length; i++) {
//         let str = "";
//         parentItr += s[i];
//         if (wordDict.includes(parentItr)) {
//             str += parentItr + " ";
//             left = i + 1;
//             while (left < s.length) {
//                 itr += s[left];
//                 if (wordDict.includes(itr)) {
//                     str += itr + " ";
//                     itr = "";
//                 }
//                 left++;
//             }
//             itr = ""
//             result.push(str.trim());
//         }
//     }
//     return result;
// };

const backtrack = (s, words, path, result) => {
    if (s.length === 0) {
        result.push(path.join(' '))
        return
    }
    for (let i = 1; i <= s.length; i++) {
        const substring = s.substring(0, i)
        if (words.has(substring)) {
            path.push(substring)
            backtrack(s.slice(i), words, path, result)
            path.pop()
        }
    }
}
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
const wordBreak = (s, wordDict) => {
    const result = []
    const words = new Set(wordDict)
    backtrack(s, words, [], result)
    return result
};