/**
 * 最后一块石头的重量
  有一堆石头，每块石头的重量都是正整数。
  每一回合，从中选出两块最重的石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：
  如果 x == y，那么两块石头都会被完全粉碎；
  如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
  最后，最多只会剩下一块石头。返回此石头的重量。如果没有石头剩下，就返回 0。

  提示：
  1 <= stones.length <= 30
  1 <= stones[i] <= 1000

  来源：https://leetcode-cn.com/problems/last-stone-weight/
 * @param {number[]} stones
 * @return {number}
 */
function lastStoneWeight(stones) {
  // 拷贝原数组并降序排序
  const stoneWeights = stones.slice().sort((a, b) => b - a)
  // 获取数值插入数组索引
  function getIndex(value, arr) {
    if (arr.length === 0) return 0
    for (let i = 0; i < arr.length; i++) {
      // >= 判断条件，遇到相等值，提前返回，减少遍历次数
      if (value >= arr[i]) {
        return i
      }
    }
    return arr.length
  }

  while (stoneWeights.length > 1) {
    // 获取最大两个值，并计算差值
    const maxWeights = stoneWeights.splice(0, 2)
    const diff = maxWeights[0] - maxWeights[1]

    if (diff > 0) {
      // 差值大于0时，将其插入到指定位置
      stoneWeights.splice(getIndex(diff, stoneWeights), 0, diff)
    }
  }

  return stoneWeights[0] || 0
};

lastStoneWeight([7,6,7,6,9])