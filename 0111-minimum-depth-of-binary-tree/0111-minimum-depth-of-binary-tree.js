/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (!root) return 0;
    let minDepth = 1;
    let queue = [root];
    while (queue.length) {
        let levelSize = queue.length
        while (levelSize) {
            let item = queue.shift();
            if (!item.left && !item.right) {
                return minDepth
            } else {
                if (item.left) queue.push(item.left)
                if (item.right) queue.push(item.right)
            }
            levelSize--
        }
        minDepth++
    }
};