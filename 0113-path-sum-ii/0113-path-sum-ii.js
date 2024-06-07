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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    let res = []
    const dfs = (node, sum, path) => {
        if (node === null) return []
        sum += node.val;
        path.push(node.val)
        if (!node.left && !node.right && sum === targetSum) {
            res.push([...path])
        }
        dfs(node.left, sum, path);
        dfs(node.right, sum, path)
        path.pop();
    }
    dfs(root, 0, [])
    return res
};