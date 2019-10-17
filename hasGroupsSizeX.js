/**
 * @param {number[]} deck
 * @return {boolean}
 */
function gcd(a, b) {
  const diff = Math.abs(a - b);
  return b === diff ? b : gcd(b, diff);
}

var hasGroupsSizeX = function(deck) {
  if (deck.length < 2) return false;
  const counts = {};
  for (let item of deck) {
    counts[item] = counts[item] ? counts[item] + 1 : 1;
  }

  let g = -1;
  for (let key in counts) {
    g = g === -1 ? counts[key] : gcd(g, counts[key]);
  }

  return g >= 2;
};

hasGroupsSizeX([1,1,1,1,2,2,2,2,2,2])