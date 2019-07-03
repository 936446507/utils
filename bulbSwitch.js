/**
 * @param {number} n
 * @return {number}
 */
const bulbSwitch = (n) => {
  if (n <= 0) return 0;
  if (n === 1 || n === 2) return 1;

  const swiths = new Array(n).fill(1);
  const setStepSwith = (step, action) => {
    for (let i = step - 1; i < swiths.length; i += step) {
      swiths[i] = action === 'close' ? 0 : ~swiths[i] + 2;
    }
  }
  setStepSwith(2, 'close');
  for (let i = 3; i <= n; i++) {
    setStepSwith(i);
  }

  return swiths.filter(item => item).length;
};

bulbSwitch(8)