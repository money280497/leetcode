var addTwoNumbers = function (l1, l2) {
    let s1 = "", s2 = "";
    // Extract digits from the first list and form the number in reverse
    while (l1) {
        s1 = l1.val.toString() + s1;
        l1 = l1.next;
    }
    // Extract digits from the second list and form the number in reverse
    while (l2) {
        s2 = l2.val.toString() + s2;
        l2 = l2.next;
    }
    // Add the two numbers
    let sum = BigInt(s1) + BigInt(s2); // Use BigInt for handling large numbers
    // Convert the sum into a string and split into digits
    let sumStr = sum.toString().split('');
    // Create a dummy head for the result list
    let head = new ListNode(0);
    let cur = head;
    // Iterate in reverse since we want to add nodes in reverse order
    for (let i = sumStr.length - 1; i >= 0; i--) {
        cur.next = new ListNode(parseInt(sumStr[i]));
        cur = cur.next;
    }
    return head.next; // Return the next of dummy head, which is the actual head of the result list
};