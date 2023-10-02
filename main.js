function calculates(nums, target) {
    const mapOfNum = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const valueNeeded = target - nums[i];

        if (mapOfNum.has(valueNeeded)) {
            return [mapOfNum.get(valueNeeded), i];
        }
        mapOfNum.set(nums[i], i);
    }
    return [];
}

const nums = [4, 9, 11, 17];
const target = 20;
const result = calculates(nums, target);
console.log(result)