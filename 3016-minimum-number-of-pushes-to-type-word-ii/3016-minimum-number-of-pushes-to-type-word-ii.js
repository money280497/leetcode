/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
    let map = new Map();

    // Populate the map with character counts
    for (let key of word) {
        map.set(key, (map.get(key) || 0) + 1);
    }

    // Convert the map to an array and sort it by values in descending order
    let sortedEntries = [...map.entries()].sort((a, b) => b[1] - a[1]);

    let res = 0, count = 1;

    // Iterate over the sorted entries to calculate the result
    console.log({ sortedEntries })
    for (let [key, value] of sortedEntries) {
        if (count <= 8) {
            res += value;
        } else if (count > 8 && count <= 16) {
            res += (2 * value);
        } else if (count > 16 && count <= 24) {
            res += (3 * value);
        } else if (count > 24) {
            res += (4 * value);
        }
        count++;
    }

    return res;
};

// Example usage:
console.log(minimumPushes("exampleword")); // Replace "exampleword" with your input string
