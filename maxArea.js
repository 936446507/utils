/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = height => {
  let left = 0;
  let right = height.length - 1;
  let max = 0;

  while (left < right) {
    const h = Math.min(height[left], height[right]);
    const area = (right - left) * h;
    max = area > max ? area : max;
    while (left < right && h === height[left]) left += 1;
    while (left < right && h === height[right]) right -= 1;
  }

  return max;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
