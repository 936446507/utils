/**
 * 给定一个段落 (paragraph) 和一个禁用单词列表 (banned)。返回出现次数最多，同时不在禁用列表中的单词。题目保证至少有一个词不在禁用列表中，而且答案唯一。
  禁用列表中的单词用小写字母表示，不含标点符号。段落中的单词不区分大小写。答案都是小写字母
  链接：https://leetcode-cn.com/problems/most-common-word

 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  const words = paragraph.toLocaleLowerCase().match(/\w+/g).filter(item => !banned.includes(item))
  const obj = {}

  words.forEach(word => {
    obj[word] = obj[word] ? obj[word] + 1 : 1
  })

  let result = words[0]
  let num = 1
  for (let i = 1; i < words.length; i++) {
    if (obj[words[i]] > num) {
      result = words[i]
      num = obj[words[i]]
    }
  }

  return result
};