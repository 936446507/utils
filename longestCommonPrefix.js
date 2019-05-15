/*
    编写一个函数来查找字符串数组中的最长公共前缀。
    如果不存在公共前缀，返回空字符串 ""。
    输入: ["flower","flow","flight"]
    输出: "fl"
    输入: ["dog","racecar","car"]
    输出: ""
    https://leetcode-cn.com/problems/longest-common-prefix/
*/

function longestCommonPrefix(strs) {
  if (strs.length === 0) return ''

  const str = strs.shift()

  for (let i = 0; i < str.length; i++) {
    const isSame = strs.every(item => str[i] === item[i])
    if (!isSame) {
      return str.substring(0, i)
    }
  }

  return str
}

function longestCommonPrefix(strs) {
  if (strs.length === 0) return ''
  // 对比两个字符串遍历最短字符串取出公共前缀
  const findCommonPrefix = (leftStr, rightStr) => {
    const minLenStr = leftStr.length > rightStr.length ? rightStr : leftStr

    for (let i = 0; i < minLenStr.length; i++) {
      if (leftStr[i] !== rightStr[i]) {
        return leftStr.substring(0, i)
      }
    }
    return minLenStr
  }
  // 递归分治查找
  // "flower","flow","flight" => "flow","flight" => "fl"
  const findLongestCommonPrefix = (strs, leftIndex, rightIndex) => {
    // 左右索引相等时，作为递归结束条件，返回该索引字符串值
    if (leftIndex === rightIndex) return strs[leftIndex]

    const middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    const leftStr = findLongestCommonPrefix(strs, leftIndex, middleIndex)
    const rightStr = findLongestCommonPrefix(strs, middleIndex + 1, rightIndex)

    return findCommonPrefix(leftStr, rightStr)
  }

  return findLongestCommonPrefix(strs, 0, strs.length - 1)
}

longestCommonPrefix(["flower", "flow", "flight", 'flww'])