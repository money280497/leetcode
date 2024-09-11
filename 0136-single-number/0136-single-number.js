/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const obj = {}
    for(let item of nums){
        if(obj[item]){
            delete obj[item]
        }else{
            obj[item]=1;
        }
    }
    return Object.keys(obj)[0]
};