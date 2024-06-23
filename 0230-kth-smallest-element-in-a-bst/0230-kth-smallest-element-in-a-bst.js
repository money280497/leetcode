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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    const res = []
    inOrder(root);
    function inOrder(root) {
        if (!root) return null
        inOrder(root.left)
        res.push(root.val)
        inOrder(root.right)
    }
    return res[k - 1]
};