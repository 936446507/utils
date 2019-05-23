function detectCapitalUse (word) {
  let num = 0
  for (let i = 0; i < word.length; i++) {
    if (/[A-Z]/.test(word[i]) && num++ < i) {
      return false
    }
  }

  return num === word.length || num <= 1
}