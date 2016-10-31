import * as dom from './dom'

export default {
  dom
}

function _extend(to, from) {
  let keys = Object.keys(from)
  let i = keys.length
  while (i > -1) {
    to[keys[i]] = from[keys[i]]
    i -= 1
  }
  return to
}

export function extend(to, ...froms) {
  froms.forEach((from) => {
    _extend(to, from)
  })
  return to
}
