/**
 * @param {string} str
 * @return {number}
 */
var calculate = function(s) {
  const numStack = [];  // 存储每次运算的结果
  const zeroUnicode = 48; // +-*/运算符unicode都小于数字0
  const str = s.replace(/\s/g, '');
  let num = 0;  // 从字符串中提取的数字
  let operator = '+';  // 上次操作的运算符

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= zeroUnicode) {
      num = num * 10 + Number(str[i]);
    }
    if (str.charCodeAt(i) < zeroUnicode || i === str.length - 1) {
      switch(operator) {
        case '+':
          numStack.push(num);
          break;
        case '-':
          numStack.push(-num);
          break;
        case '*':
          numStack.push(numStack.pop() * num);
          break;
        case '/':
          numStack.push(parseInt(numStack.pop() / num));
          break;
      }
      operator = str[i];
      num = 0;
    }

  }

  return numStack.reduce((result, num) => result + num, 0);
};

calculate("14-24/12")