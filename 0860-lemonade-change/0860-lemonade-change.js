/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let five = 0;
    let ten = 0;

    for (const bill of bills) {
        if (bill === 5) {
            five++
        } else if (five > 0 && bill === 10) {
            five--;
            ten++;
        } else if (bill === 20) {
            if (ten > 0 && five > 0) {
                ten--;
                five--;
            }
            else if (five > 3) {
                five -= 3
            } else {
                return false
            }
        } else {
            return false
        }
    }
    return true;
};