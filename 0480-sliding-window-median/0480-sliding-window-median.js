/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function (nums, k) {
    const window = new Window();
    for (let i = 0; i < k - 1; i++) window.add(nums[i]);
    let res = [];
    for (let i = k - 1; i < nums.length; i++) {
        window.add(nums[i]);
        res.push(window.median());
        window.remove(nums[i - k + 1]);
    }
    return res;
};

class Window {
    constructor() {
        this.minHeap = new Heap((a, b) => a < b);
        this.maxHeap = new Heap((a, b) => a > b);
    }

    add(value) {
        this.heap(value).add(value);
        this.balance();
    }

    remove(value) {
        this.heap(value).remove(value);
        this.balance();
    }

    median() {
        if (this.minHeap.size() === this.maxHeap.size()) {
            return (this.minHeap.peak() + this.maxHeap.peak()) / 2;
        }
        return this.minHeap.peak();
    }

    heap(value) {
        return BigInt(value) < this.median() ? this.maxHeap : this.minHeap
    }

    balance() {
        const diff = this.maxHeap.size() - this.minHeap.size()
        if (diff > 0) this.minHeap.add(this.maxHeap.pop());
        else if (diff < -1) this.maxHeap.add(this.minHeap.pop());
    }
}

class Heap {
    constructor(fn) {
        this.store = [];
        this.fn = fn;
    }

    peak() {
        return this.store[0] || 0;
    }

    size() {
        return this.store.length;
    }

    isEmpty() {
        return this.store.length === 0;
    }

    add(value) {
        this.store.push(value);
        this.heapifyUp(this.store.length - 1);
    }

    remove(value) {
        const idx = this.store.indexOf(value);
        if (idx === this.store.length - 1) return this.store.pop();
        this.store[idx] = this.store.pop()
        this.heapifyDown(this.heapifyUp(idx));
    }

    pop() {
        if (this.store.length < 2) return this.store.pop();
        const result = this.store[0];
        this.store[0] = this.store.pop();
        this.heapifyDown(0);
        return result;
    }

    heapifyDown(parent) {
        const childs = [1, 2].map((n) => parent * 2 + n).filter((n) => n < this.store.length);
        let child = childs[0];
        if (childs[1] && this.fn(this.store[childs[1]], this.store[child])) {
            child = childs[1];
        }
        if (child && this.fn(this.store[child], this.store[parent])) {
            const temp = this.store[child];
            this.store[child] = this.store[parent];
            this.store[parent] = temp;
            return this.heapifyDown(child);
        }
        return parent;
    }

    heapifyUp(child) {
        const parent = Math.floor((child - 1) / 2);
        if (child && this.fn(this.store[child], this.store[parent])) {
            const temp = this.store[child];
            this.store[child] = this.store[parent];
            this.store[parent] = temp;
            return this.heapifyUp(parent);
        }
        return child;
    }
}