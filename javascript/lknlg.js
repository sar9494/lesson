function find_kth_largest(nums,k) {
    let a;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] >= nums[i + 1]) {
          a = nums[i];
          nums[i] = nums[i + 1];
          nums[i + 1] = a;
        }
        for (let j = 0; j < nums.length; j++) {
          if (nums[j] >= nums[j + 1]) {
            a = nums[j];
            nums[j] = nums[j + 1];
            nums[j + 1] = a;
          }
        }
      }
      console.log(nums)
    return nums[length-k]
};

let nums = [5, 97, 2,1, 2, 5,27, 38];
let k = 3;
console.log(find_kth_largest([5, 97, 2,1, 2, 5,27, 38], 3));  // Output: 51
