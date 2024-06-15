/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
    let start = 0
    let res = "";
    while (start < command.length) {
        if (start + 1 < command.length && command[start] === "(" && command[start + 1] === ")") {
            res += "o";
        } else if (command[start] === "G") {
            res += "G"
        } else if (command[start] === "a" || command[start] === "l") {
            res += command[start]
        }
        start++;
    }
    return res
};  