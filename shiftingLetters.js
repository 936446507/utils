/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function(S, shifts) {
  const aUnicode = 97;
  const letterNums = 26;
  const transformUnicode = (step, index) => {
    const increment = S.charCodeAt(index) - aUnicode + step;
    return aUnicode + (increment > letterNums ? increment % letterNums : increment)
  };
  const total = shifts.reduce((result, shift) => result + shift, 0);
  const unicodes = [transformUnicode(total, 0)];
  let prevTotal = shifts[0];

  for (let i = 1; i < shifts.length; i++) {
    unicodes[i] = transformUnicode(total - prevTotal, i);
    prevTotal += shifts[i];
  }

  return String.fromCharCode(...unicodes);
};

shiftingLetters("abc", [3,5,9])