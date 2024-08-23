/**
 * @param {string} expression
 * @return {string}
 */
function fractionAddition(expression) {
    const fractions = expression.match(/-?\d+\/\d+/g);
    let A = 0, B = 1;

    fractions.forEach(fraction => {
        let [a, b] = fraction.split('/').map(Number);
        A = A * b + a * B;
        B *= b;
        const gcd = Math.abs(gcdHelper(A, B));
        A /= gcd;
        B /= gcd;
    });

    return `${A}/${B}`;
}

function gcdHelper(a, b) {
    return b === 0 ? a : gcdHelper(b, a % b);
}
