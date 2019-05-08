export function hasClass(el, cls) {
  if (!el || !cls) return false

  return el.className.indexOf(cls) >= 0
}

export function addClass(el, cls = '') {
  if (!el) return false
  const classes = cls.split(' ').filter(item => item)
  const curClass = el.className.split(' ').filter(item => item)

  el.className = classes.reduce((className, cur) => {
    if (!hasClass(el, cur)) {
      className.push(cur)
    }
    return className
  }, [...curClass]).join(' ')
}

export function removeClass(el, cls = '') {
  if (!el) return false
  const classes = cls.split(' ').filter(item => item)
  const curClass = el.className.split(' ').filter(item => item)

  el.className = classes.reduce((className, cur) => {
    if (hasClass(el, cur)) {
      const index = curClass.reduce((result, curClass, index) => {
        if (curClass === cur) {
          result = index
        }
        return result
      }, null)
      index !== null && className.splice(index, 1)
    }
    return className
  }, [...curClass]).join(' ')
}

export function getStyle(ele) {
  let style = null;
  if (window.getComputedStyle) {
    style = window.getComputedStyle(ele, null);
  } else {
    style = ele.currentStyle;
  }

  return style;
}
