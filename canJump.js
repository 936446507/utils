/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = nums => {
  // 最远距离的位置
  let end = 0
  for (let i = 0; i < nums.length; i++) {
    // 最远距离位置不能到达当前位置时
    if (i > end) return false
    end = Math.max(end, i + nums[i])
    // 当前最远距离位置大于等于最后一个位置时
    if (end >= nums.length - 1) return true
  }
  return true
};

canJump([2,3,1,1,4])
