/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
    let count = 0;
    for (let person of details) {
        console.log({ person })
        if (parseInt(person.charAt(11) + person.charAt(12)) > 60)
            count++
    }
    return count
};