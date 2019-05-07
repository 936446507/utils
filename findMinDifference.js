// https://leetcode-cn.com/problems/minimum-time-difference/

/**
 * 最小时间差
 * 给定一个 24 小时制（小时:分钟）的时间列表，找出列表中任意两个时间的最小时间差并已分钟数表示。
 * @param {string[]} timePoints
 * @return {number}
 */

function findMinDifference(timePoints) {
  // 将字符串时间转换成数值
  const arr = timePoints.map(item => {
    const [hour, minute] = item.split(':')

    return (+hour) * 60 + (+minute)
  })

  // 降序序排序后在首位插入时间值，用于首位时间差值计算
  arr.sort((a, b) => b - a).unshift(24 * 60 + arr[arr.length - 1])

  return arr.reduce((prev, cur, index, arr) => {
    const diff = arr[index - 1] - cur

    return diff < prev ? diff : prev
  })
};

function findDiff(arr) {
  return arr.sort((a, b) => b - a).reduce((prev, cur, index, arr) => {
    const diff = arr[index - 1] - cur
    return diff < prev ? diff : prev
  })

}