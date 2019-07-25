/**
 * 重复的DNA序列
 * 所有 DNA 由一系列缩写为 A，C，G 和 T 的核苷酸组成，例如：“ACGAATTCCG”。在研究 DNA 时，识别 DNA 中的重复序列有时会对研究非常有帮助。
  编写一个函数来查找 DNA 分子中所有出现超多一次的10个字母长的序列（子串）。
  示例:
  输入: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
  输出: ["AAAAACCCCC", "CCCCCAAAAA"]
  来源：力扣（LeetCode）
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/repeated-dna-sequences
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = (s) => {
  const obj = {
    A: 0, // 00
    C: 1, // 01
    G: 2, // 10
    T: 3  // 11
  }
  const result = [];
  // 子串数值范围 0 - (1 << 20) - 1，即：20个1 二进制的情况
  const total = (1 << 20) - 1;
  const map = new Map();
  let val = 0; // 子串十进制数值
  // 取出第一个10字母长度的子串数值
  for (let i = 0; i < 10; i++) val = (val << 2) | obj[s[i]];
  map.set(val, 1);
  for (let i = 10; i < s.length; i++) {
    /*
      * 例：CCAAAAAGGG 索引右移一位 CAAAAAGGGT
      * 0101 0000 0000 0010 1010 左移2位
      * 0101 0000 0000 0010 1010 00 按位与 total：0 - (1 << 20) - 1
      *   01 0000 0000 0010 1010 00 按位或
      *   01 0000 0000 0010 1010 11
    */
    val = ((val << 2) & total) | obj[s[i]];  // 左移一个字符并加上新字符
    if (map.has(val)) {
      const num = map.get(val)
      num === 1 && result.push(s.substr(i - 9, 10));
      map.set(val, num + 1);
    } else {
      map.set(val, 1);
    }
  }

  return result
};

findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT')