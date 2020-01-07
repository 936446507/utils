/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const aUnicode = 97;
const setCounts = (str, counts) => {
  for (let i = 0; i < str.length; i++) {
    const index = str.charCodeAt(i) - aUnicode;
    const count = counts[index];
    counts[index] = count + 1;
  }
  return counts;
};
const canConstruct = (ransomNote, magazine) => {
  const ransomNoteCounts = setCounts(ransomNote, new Array(26).fill(0));
  const magazineCounts = setCounts(magazine, new Array(26).fill(0));

  return ransomNoteCounts.every((item, index) => !item || item <= magazineCounts[index])
};

canConstruct('aa', 'aab')