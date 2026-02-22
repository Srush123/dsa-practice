function findMax(nums: number[]): number {
    if (nums.length === 0) {
        throw new Error("Array cannot be empty");
    }
    
    let max = nums[0];

    for (const num of nums) {
        if(num > max) {
            max = nums;
        }
    }
    return max;
}