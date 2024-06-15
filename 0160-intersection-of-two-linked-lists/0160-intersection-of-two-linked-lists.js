/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// var getIntersectionNode = function (headA, headB) {
//     let map = new Map();
//     if (!headA || !headB) return null
//     while (headA && headB) {
//         if (map.has(headA))
//             return headA
//         if (map.has(headB))
//             return headB
//         map.set(headA, 1);
//         map.set(headB, 1);
//         headA = headA.next;
//         headB = headB.next;
//     }
//     return null
// };
var getIntersectionNode = function(headA, headB) {
    let a = headA, b = headB
    while (a !== b) {
        a = !a ? headB : a.next
        b = !b ? headA : b.next
    }
    return a
};