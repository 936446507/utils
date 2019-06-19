/**
 * @param {string} S
 * @return {string}
 */
function reorganizeString(S) {
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

  const obj = {};
  for (let i = 0; i < S.length; i++) {
    obj[S[i]] = obj[S[i]] ? obj[S[i]] + 1 : 1;
  }

  const strNums = Object.keys(obj)
    .map(key => ({ key, num: obj[key] }))
    .sort((a, b) => b.num - a.num);

  let result = '';
  while (strNums.length > 1) {
    const [ first, sconed ] = strNums.splice(0, 2);
    result += first.key + sconed.key
    first.num -= 1;
    sconed.num -= 1;

    spliceNum(sconed, strNums);
    spliceNum(first, strNums);
  }

  if (strNums.length === 1 && strNums[0].num === 1) {
    result += strNums[0].key;
  } else if (strNums.length === 1 && strNums[0].num > 1) {
    result = '';
  }

  return result
};

reorganizeString("aab");