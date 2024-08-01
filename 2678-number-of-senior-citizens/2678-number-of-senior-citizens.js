/**
 * @param {string[]} details
 * @return {number}
 */
// var countSeniors = function (details) {
//     // let count = 0;
//     // for (let person of details) {
//     //     if (parseInt(person.charAt(11) + person.charAt(12)) > 60)
//     //         count++
//     // }
//     // return count
//     return details.reduce((acc, cur) => {
//         if (parseInt(cur.substring(11, 13)) > 60)
//             return acc++;
//         return acc;
//     }, 0)
// };

var countSeniors = function (details) {
    return details.reduce((acc, cur) => {
        if (parseInt(cur.substring(11, 13)) > 60) {
            acc++;
        }
        return acc;
    }, 0);
};
