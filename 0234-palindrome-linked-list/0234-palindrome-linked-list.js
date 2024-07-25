/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let cur = head;
    let str = ""
    while (cur) {
        str += cur.val;
        cur = cur.next;
    }
    console.log(str);
    return str.split("").reverse().join("") === str;
};