/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */

// 字符串长度不相等, 直接返回false
// 字符串相等的时候, 只要有重复的元素就返回true
// A, B字符串有不相等的两个地方, 需要查看它们交换后是否相等即可.
function buddyStrings(A, B) {
  // 长度相等以及不同字符个数为2
  const ALen = A.length
  const BLen = B.length
  const buddyLen = 2
  if (ALen < buddyLen || BLen < buddyLen || ALen !== BLen) return false

  // 存储字符串A与B不同字符的索引以及对应值
  let diffValInfos = []
  for (let i = 0; i < ALen; i++) {
    if (A[i] !== B[i] && diffValInfos.push({index: i, value: A[i]}) > buddyLen) return false
  }

  // 字符串相等并且有重复字符
  const AStrArr = A.match(/\w/g)
  if (diffValInfos.length === 0 && new Set(AStrArr).size < AStrArr.length) return true

  // 获取交换字符位置后的字符串
  const getExchangeStr = () => {
    const diffVals = diffValInfos.map(item => item.value).reverse()
    const reg = new RegExp(diffVals.join('|'), 'g')
    let rightMatchCount = 0
    return A.replace(reg, (match, matchIndex) => {
      const isDiffIndex = diffValInfos.map(item => item.index).includes(matchIndex)
      let result = ''
      if (isDiffIndex) {
        result = diffVals[rightMatchCount]
        rightMatchCount += 1
      } else {
        result = match
      }

      return result
    })
  }

  if (diffValInfos.length === buddyLen) {
     return getExchangeStr() === B
  }

  return false
};

buddyStrings('abab', 'abab')