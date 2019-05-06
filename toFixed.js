Number.prototype.toFixed = function (len) {
  const num = this

  if (isNaN(num)) return false
  const [integer, decimal = ''] = num.toString().split('.')
  let result = integer + (len > 0 ? '.' : '')
  for (let i = 0; i < len; i++) {
    result += decimal[i] ? decimal[i] : '0'
  }
  console.log(result)
  return result
}