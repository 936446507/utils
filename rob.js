/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const len = nums.length;
  if(len == 0) return 0;
  const dp = new Array(len + 1);
  dp[0] = 0;
  dp[1] = nums[0];

  for(let i = 2; i <= len; i++) {
    dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i-1]);
  }
  return dp[len];
};

function getWays(n) {
  if (n < 1) {
    return 0;
  } else if (n < 3) {
    return n;
  }
  let a = 1;
  let b = 2;
  let temp = 0;
  for (let i = 3; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return temp;
}

const n = getWays(4);
