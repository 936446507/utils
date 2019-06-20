/**
 * 重构字符串
  给定一个字符串S，检查是否能重新排布其中的字母，使得两相邻的字符不同。
  若可行，输出任意可行的结果。若不可行，返回空字符串。

  示例 1:
  输入: S = "aab"
  输出: "aba"

  示例 2:
  输入: S = "aaab"
  输出: ""

  注意:
  S 只包含小写字母并且长度在[1, 500]区间内。

  来源：https://leetcode-cn.com/problems/reorganize-string/
 * @param {string} S
 * @return {string}
 */
function reorganizeString(S) {
  // 寻找插值索引
  function findIndex(value, arr) {
    if (arr.length === 0) return 0
    for (let i = 0; i < arr.length; i++) {
      // >= 判断条件，遇到相等值，提前返回，减少遍历次数
      if (value >= arr[i].num) {
        return i
      }
    }
    return arr.length
  }
  function spliceNum(obj, arr) {
    obj.num > 0 ? arr.splice(findIndex(obj.num, arr), 0, obj) : obj = null;
  }
  // 存储26位字母出现次数
  const nums = new Array(26).fill(0);
  const aUnicode = 97;
  for (let i = 0; i < S.length; i++) {
    nums[S.charCodeAt(i) - aUnicode] += 1;
  }

  // 存储字符串出现的字符以及次数，并降序排序
  const strNums = nums.reduce((arr, num, index) => {
    num > 0 && spliceNum({ key: String.fromCharCode(index + aUnicode), num }, arr);
    return arr;
  }, []);

  let result = '';
  while (strNums.length > 1) {
    // 取出出现次数最多的两个字符
    const first = strNums.shift();
    const second = strNums.shift();
    result += first.key + second.key
    first.num -= 1;
    second.num -= 1;
    // 先处理 第二多次数字符，避免位置错。 aabb => abba
    spliceNum(second, strNums);
    spliceNum(first, strNums);
  }
  // 当数组长度剩余1时，若次数大于1，则为不可重构字符串
  if (strNums.length === 1 && strNums[0].num > 1) return '';

  result = strNums.length === 1 ? result + strNums[0].key : result;

  return result
};

reorganizeString("aab");