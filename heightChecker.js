/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    // [1,1,4,2,1,3] => [1, 1, 1, 2, 3, 4]

    return heights.slice().sort((a, b) => a - b).filter((item, index) => item !== heights[index]).length;
};

var heightChecker = function(heights) {
  // [1,1,4,2,1,3] => [1, 1, 1, 2, 3, 4]
  const arr = new Array(101).fill(0);
  for (let height of heights) {
      arr[height]++;
  }
  let count = 0;
  for (let i = 1, j = 0; i < arr.length; i++) {
    while (arr[i]-- > 0) {
        if (heights[j++] != i) count++;
    }
  }
  return count;

};

var heightChecker = function(heights) {
  // [1,1,4,2,1,3] => [1, 1, 1, 2, 3, 4]
  const obj = {}
  for (let height of heights) {
    obj[height] = obj[height] ? obj[height] + 1 : 1
  }
  let count = 0;
  let i = 0;
  for (let key in obj) {
    while(obj[key]-- > 0) {
      if (heights[i++] !== +key) {
        count += 1;
      }
    }
  }
  return count;
};

heightChecker([1,1,4,2,1,3]);