const classService = {}

classService.has = function(el, className) {
  if (el.classList) {
    return el.classList.contains(className)
  }

  return !!el.className.match(new RegExp(`(\\s|^)${className}(\\s|$)`))
}

classService.add = function(el, className) {
  if (el.classList) {
    el.classList.add(className)
  } else if (!classService.has(el, className)) {
    el.className += ` ${className}`
  }
}

classService.remove = function(el, className) {
  if (el.classList) {
    el.classList.remove(className)
  } else if (classService.has(el, className)) {
    const reg = new RegExp(`(\\s|^)${className}(\\s|$)`)
    el.className = el.className.replace(reg, ' ')
  }
}

export default classService
