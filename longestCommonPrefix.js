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
  const strArr = strs.slice()
  const str = strArr.shift()

  for (let i = 0; i < str.length; i++) {
    const isSame = strArr.every(item => str[i] === item[i])
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

// 二分查找
const longestCommonPrefix = (strs) => {
  if (!strs) return '';

  // 数组长度小于2，直接返回空
  const length = strs.length;
  if (length < 2) return strs[0] || '';

  // 第一个元素不存在，直接返回空
  let firstStr = strs[0];

  // 递归进行二分法查找
  const loop = (start, end, str) => {
    // 下标超出范围, 结束并返回空字符串
    if (start > end) return '';

    // 取中间下标, >> 右移一位相当于除2, 右移n位相当于除以2的n次方。
    const middle = start === end ? start : start + ((end - start) >> 1);

    // 截取字符，循环遍历是否存在于所有元素，根据情况进行下一轮二分查找
    let s = str.slice(0, middle);
    for (let i = 1; i < length; i += 1) {
      // 有空元素直接返回空
      if (!strs[i]) return '';
      if (strs[i].slice(0, middle) !== s) return loop(start, middle - 1, s);
    }
    return loop(middle + 1, end, str) || s;
  };

  // loop(startIndex + 1， endIndex + 1, str)
  return loop(1, firstStr.length, firstStr);
};

longestCommonPrefix(["flower", "flow", "flight", 'flww'])