/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = (num) => {
    // Handle the special case where the number is zero
    if (num === 0) {
        return "Zero";
    }

    // Arrays to store words for single digits, tens, and thousands
    const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const thousands = ["", "Thousand", "Million", "Billion"];

    let result = "";
    let groupIndex = 0;

    // Process the number in chunks of 1000
    while (num > 0) {
        // Process the last three digits
        if (num % 1000 !== 0) {
            let groupResult = "";
            let part = num % 1000;

            // Handle hundreds
            if (part >= 100) {
                groupResult += ones[Math.floor(part / 100)] + " Hundred ";
                part %= 100;
            }

            // Handle tens and units
            if (part >= 20) {
                groupResult += tens[Math.floor(part / 10)] + " ";
                part %= 10;
            }

            // Handle units
            if (part > 0) {
                groupResult += ones[part] + " ";
            }

            // Append the scale (thousand, million, billion) for the current group
            groupResult += thousands[groupIndex] + " ";
            // Insert the group result at the beginning of the final result
            result = groupResult + result;
        }
        // Move to the next chunk of 1000
        num = Math.floor(num / 1000);
        groupIndex += 1;
    }

    return result.trim();
}

