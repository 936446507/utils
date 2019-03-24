function getUrlParams() {
  let href = window.location.href
  const hash = window.location.hash
  const regExp = /(\w+)=(\w+)/ig
  const pos = href.indexOf('?')

  href = href.replace(hash, '')

  if (pos !== -1) {
    const params = {}
    href.substr(pos)
    href.replace(regExp, function(match, matchExp1, matchExp2) {
      params[matchExp1] = matchExp2
    })
    return params
  }
  return null
}
