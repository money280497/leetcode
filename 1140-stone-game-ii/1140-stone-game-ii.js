/**
 * @param {number[]} piles
 * @return {number}
 */
function stoneGameII(A) {
    const N = A.length;
    
    // Modify the array A in place
    for (let i = N - 2; i >= 0; i--) {
        A[i] += A[i + 1];
    }

    // Memoization cache
    const dp = (function() {
        const cache = {};
        
        return function(i, m) {
            const key = `${i},${m}`;
            if (cache[key] !== undefined) {
                return cache[key];
            }
            if (i + 2 * m >= N) {
                return A[i];
            }
            
            let result = Infinity;
            for (let x = 1; x <= 2 * m; x++) {
                result = Math.min(result, dp(i + x, Math.max(m, x)));
            }
            
            cache[key] = A[i] - result;
            return cache[key];
        };
    })();

    return dp(0, 1);
}
