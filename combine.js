/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];
  const temp = [];

  function dfs(index, array) {
    if (temp.length === k) {
      result.push(temp.slice())
    }
    for (let i = index; i <= n; i++) {
      array.push(i);
      dfs(i + 1, array);
      array.pop();
    }
  }
  dfs(1, temp);
  return result;
};

combine(4, 2);