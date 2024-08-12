/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
        this.array = nums;
        this.key = k;
        this.result = [];
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.array.push(val);
    this.array.sort((a, b) => b - a);
    // this.result.push(this.array[this.key - 1]);
    // console.log("wwe",this.result)
    return this.array[this.key - 1]
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */