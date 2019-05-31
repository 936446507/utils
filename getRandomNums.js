function getRandomNum(min, max){
  var random = Math.floor(Math.random() * (max- min + 1) + min);
  return random;
}

function getUniqueNum(min, max, arr) {
  const num = getRandomNum(min, max)
  if (arr.indexOf(num) < 0) {
    return num
  }
  getUniqueNum(min, max, arr)
}

function getUniqueNums(min, max, len  = max - min + 1) {
  const arr = []
  const diff = max - min + 1
  len = diff < len ? diff : len

  for (let i = 0; i < len; i++) {
    arr.push(getUniqueNum(min, max, arr))
  }

  return arr
}


getUniqueNums(0, 1, 4)