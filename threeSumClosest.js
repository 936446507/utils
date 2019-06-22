/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a- b);
  let result = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    let start = i + 1;
    let end = nums.length - 1;

    while(start < end) {
      const sum = nums[i] + nums[start] + nums[end];
      if (Math.abs(target - sum) < Math.abs(target - result)) {
        result = sum;
      }
      if (sum > target) {
        end--;
      } else if (sum < target) {
        start++;
      } else {
        return result;
      }
    }
  }
  return result;
};

threeSumClosest([-1,2,1,-4], 1)