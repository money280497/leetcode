/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
    let map = {}
    const insert = (key, value) => {
        if (map[key]) {
            let nestedArr = map[key];
            let nestedArrLen = nestedArr.length
            if (nestedArr[nestedArrLen - 1].length !== key) {
                map[key][nestedArrLen - 1].push(value)
            } else {
                map[key][nestedArrLen] = [value]
            }
        } else {
            map[key] = [[value]]
        }
    }
    groupSizes.forEach((itm, indx) => {
        insert(itm, indx)
    })
    //console.log(map)
    return Object.values(map).reduce((acc,arr)=>{
        return [...acc, ...arr]
    },[])
};