function detectCapitalUse (word) {
  let num = 0
  for (let i = 0; i < word.length; i++) {
    if (/[A-Z]/.test(word[i]) && num++ < i) {
      return false
    }
  }

  return num === word.length || num <= 1
}

function detectCapitalUse (word) {
  let firstIsLower = false

  const str = word.replace(/[a-zA-Z]/, function(match) {
    firstIsLower = /[a-z]/.test(match)
    return ''
  })
  if (firstIsLower) {
    return /^[a-z]*$/.test(str)
  } else {
    return /^[a-z]*$|^[A-Z]*$/.test(str)
  }

}