/**
 * @param {number} n
 * @return {number}
 */

const numSquares = n => {
  const squareNum = parseInt(Math.sqrt(n));
  const dp = new Array(n + 1).fill(0).map((item, index) => index);
  const squareNums = new Array(squareNum).fill(0).map((item, index) => Math.pow((index + 1), 2))

  for (let i = 2; i < n + 1; i++) {
    for (let j = 1; j < squareNum; j++) {
      if (squareNums[j] <= i) {
        const squareNum = squareNums[j];
        let index = parseInt(i / squareNum);
        dp[i] = Math.min(dp[i], dp[i - index * squareNum] + index);
      }
    }
  }
  return dp[n];
}
const numSquares = n => {
  if(n < 4) return n;

  // 记录最小个数
  const sum = [0, 1, 2, 3];

  for(let i = 4; i <= n; i++) {
    sum[i] = i;
    for(let j = 2; j * j <= i; j++) {
      sum[i] = Math.min(sum[i], sum[i - j * j] + 1);
    }
  }

  return sum[n];
}

numSquares(8)