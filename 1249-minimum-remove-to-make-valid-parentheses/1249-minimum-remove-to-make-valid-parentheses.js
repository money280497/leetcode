/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    let start, end, stack1 = [], stack2 = [];
    for (let i = 0; i < s.length; i++) {

        if (s[i] === "(") {
            stack1.push(i)
        } else if (s[i] === ")") {
            if (stack1.length)
                stack1.pop()
            else
                stack2.push(i)
        }
    }
    console.log({ stack1, stack2 })
    const stack = stack1.concat(stack2);
    console.log({ a: stack })

    let res = "";
    for (let i = 0; i < s.length; i++) {
        if (stack.includes(i)) {
            continue
        } else {
            res += s[i]
        }
    }
    return res
};
