/**
 * @param {number[]} deck
 * @return {boolean}
 */
function gcd(a, b) {
  const diff = Math.abs(a - b);
  return b === diff ? b : gcd(b, diff);
}
var a = gcd(98, 63)
var hasGroupsSizeX = function(deck) {
  if (deck.length < 2) return false;
};

hasGroupsSizeX([1,1,1,1,2,2,2,2,2,2])