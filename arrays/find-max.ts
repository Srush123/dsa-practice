function findMax(nums: number[]): number {
    if (nums.length === 0) {
        throw new Error("Array cannot be empty");
    }
    
    let max = nums[0];

    for (let i=1; i < nums.length; i++) {
        if(nums[i] > max) {
            max = nums[i];
        }
    }
    return max;
}