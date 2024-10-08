/**
 * @param {number[]} gain
 * @return {number}
 */
const largestAltitude = gain => {
    let previous = 0;
    let biggest = 0;

    for (let i = 0; i < gain.length; i += 1) {
        previous += gain[i];
        if (previous > biggest) biggest = previous;
    }

    return biggest;
};