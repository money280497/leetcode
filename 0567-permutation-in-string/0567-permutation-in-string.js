/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s1.length > s2.length)
        return false
    const charSet1 = new Array(26).fill(0);
    const charSet2 = new Array(26).fill(0);
    const helper = (charSet1, charSet2) => {
        let i = 0;
        while (i < charSet1.length) {
            if (charSet1[i] !== charSet2[i])
                return false
            i++;
        }
        return true
    }
    for (let i = 0; i < s1.length; i++) {
        charSet1[s1.charCodeAt(i) - 97] += 1
        charSet2[s2.charCodeAt(i) - 97] += 1
    }
    if (helper(charSet1, charSet2)) {
        return true
    }
    for (let i = s1.length; i < s2.length; i++) {
        charSet2[s2.charCodeAt(i) - 97]++;
        charSet2[s2.charCodeAt(i - s1.length) - 97]--;
        if (helper(charSet1, charSet2)) {
            return true
        }
    }
    return false
};