/**
 * 字母移位
 * 有一个由小写字母组成的字符串 S，和一个整数数组 shifts。
  我们将字母表中的下一个字母称为原字母的 移位（由于字母表是环绕的， 'z' 将会变成 'a'）。
  例如·，shift('a') = 'b'， shift('t') = 'u',， 以及 shift('z') = 'a'。
  对于每个 shifts[i] = x ， 我们会将 S 中的前 i+1 个字母移位 x 次。
  返回将所有这些移位都应用到 S 后最终得到的字符串。

  示例：
  输入：S = "abc", shifts = [3,5,9]
  输出："rpl"
  解释：
  我们以 "abc" 开始。
  将 S 中的第 1 个字母移位 3 次后，我们得到 "dbc"。
  再将 S 中的前 2 个字母移位 5 次后，我们得到 "igc"。
  最后将 S 中的这 3 个字母移位 9 次后，我们得到答案 "rpl"。
  提示：
  1 <= S.length = shifts.length <= 20000
  0 <= shifts[i] <= 10 ^ 9
  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/shifting-letters
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
const shiftingLetters = (S, shifts) => {
  const aUnicode = 97;
  const letterNums = 26;
  // 取得字母移位后的unicode
  const transformUnicode = (step, index) => {
    const increment = S.charCodeAt(index) - aUnicode + step;
    return aUnicode + (increment > letterNums ? increment % letterNums : increment);
  };
  // 所有移位次数总和
  const total = shifts.reduce((result, shift) => result + shift, 0);
  // 移位后字符对应unicode
  const unicodes = [transformUnicode(total, 0)];
  let prevTotal = shifts[0];

  for (let i = 1; i < shifts.length; i++) {
    unicodes[i] = transformUnicode(total - prevTotal, i);
    prevTotal += shifts[i];
  }

  return String.fromCharCode(...unicodes);
};

const yuque = require('./yuque');
// memory
yuque.memory('start');
if (shiftingLetters('abc', [3, 5, 9]) !== 'rpl') console.error('[ERROR]', `input abc [3,5,9], ouput ${shiftingLetters('abc', [3, 5, 9])}, actual rpl`);
if (shiftingLetters('xrdofd', [70,41,71,72,73,84]) !== 'surjgj') console.error('[ERROR]', `input xrdofd [70,41,71,72,73,84], ouput ${shiftingLetters('xrdofd', [70,41,71,72,73,84])}, actual surjgj`);
shiftingLetters(createS(1000), createShifts(1000));
yuque.memory('end');

// total time
const data = [];
for (let i = 0; i < 1000; i += 1) {
  data.push([createS(10000), createShifts(10000)]);
}
yuque.consumeTime(shiftingLetters, data);

function createS(times = 1000) {
  let str = '';
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < times; i += 1) {
    str += letters[Math.floor(Math.random() * 26)];
  }
  return str;
}
function createShifts(times = 1000) {
  let arr = [];
  const max = 10 ** 9;
  for (let i = 0; i < times; i += 1) {
    arr.push(Math.floor(Math.random() * max));
  }
  return arr;
}